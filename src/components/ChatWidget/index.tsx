import React, { useEffect, useRef, useState } from "react";
import type {
  ChatbotConfig,
  ConversationsResponse,
  IESResponse,
} from "../../types";
import { useConfigStore } from "../../hooks/config-store";
import { useInteractionsStore } from "../../hooks/interaction-store";
import AuthWindow from "../Auth";
import { ChatHeader } from "./header";
import { ChatContent } from "./chat-content";
import { ChatInput } from "./input";
import { useAuthStore } from "../../hooks/auth-store";
import { StartChatSection } from "./start-chat-section";
import { motion, AnimatePresence } from "framer-motion";
import { API, getClientInfo } from "../../services";
import { OpenAiAgentVoiceLayout } from "../CallWindow/openai-agent-voice";
import { ElevenLabsAgentVoiceLayout } from "../CallWindow/elevenlabs-agent-voice";
import { io, Socket } from "socket.io-client";
import { ENV } from "../../config/environment";

interface ChatWidgetProps {
  config?: ChatbotConfig;
  signature: string;
  voiceAgent: 'elevenlabs' | 'openai';
}

const INIT_PAGINATION = {
  limit: 10,
  page: 0,
  pages: 0,
  size: 10,
};

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  config,
  signature,
  voiceAgent
}) => {
  const [loading, setLoading] = useState(false);
  const [fetching, _setFetching] = useState(false);
  const { isFirstTime, setIsFirstTime } = useAuthStore();
  const [phoneOrIP, setPhoneOrIP] = useState<{ name: string, value: string } | null>(null);

  // const [chatType, setChatType] = useState("");
  const [chatHistoryId, setChatHistoryId] = useState("");
  const [currentResponseMsg, setCurrentResponseMsg] = useState("");
  const [pagination, setPagination] =
    useState<Omit<ConversationsResponse, "data">>(INIT_PAGINATION);

  const { setConfig: setConfigStore, setSignature: setSignatureStore } =
    useConfigStore();

  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isCallVisible, setIsCallVisible] = useState(false);
  const [shouldRenderChat, setShouldRenderChat] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    interactions,
    addInteraction,
    updateAiInteractionByIndex,
    chatType,
    setChatType,
  } = useInteractionsStore();

  // Ref untuk menyimpan AbortController agar bisa diakses di luar handleSendMessage
  const abortControllerRef = useRef<AbortController | null>(null);
  const socketRef = useRef<Socket | null>(null);

  // Fungsi untuk membatalkan request yang sedang berjalan
  const cancelSendMessage = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
  };

  const handleToggleChatWindow = () => {
    if (isChatVisible) {
      setIsChatVisible(false); // trigger exit
    } else {
      setShouldRenderChat(true); // show component
      setIsChatVisible(true); // trigger enter
    }
  };

  const handleToggleCallWindow = () => {
    setIsCallVisible(!isCallVisible);
  };

  const handleSendMessage = async (message: string) => {
    if (!phoneOrIP) return;
    cancelSendMessage();
    setLoading(true);

    const isWebsite = config?.widgetType === "website";

    // Buat AbortController baru untuk request ini
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      let response: Response;

      if (isWebsite) {
        const token = localStorage.getItem(`mimin-token-${config?.credentials?.username}`);
        const name = phoneOrIP.name || phoneOrIP.value;

        const websitePayload = {
          sender: {
            name,
            phone: phoneOrIP.value,
            type: chatType || "",
          },
          recipient: {
            id: config?.credentials?.websiteId || "",
          },
          message: {
            id: crypto.randomUUID(),
            reply_to: "",
            text: message,
            media: [],
          },
        };

        response = await API("fetch", "customer")(
          `/v1/website/webhook/${config?.credentials?.username}`,
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": config?.credentials?.apiKey || "",
              ...(token ? { "Authorization-Customer": `Bearer ${token}` } : {}),
              Accept: "text/event-stream",
            },
            body: JSON.stringify(websitePayload),
            method: "POST",
            signal: abortController.signal,
          }
        );
      } else {
        let name = phoneOrIP.name;
        if (!name) name = navigator.userAgent;

        const chatbotPayload = {
          name,
          phone: phoneOrIP.value,
          message_id: crypto.randomUUID(),
          message,
          media_type: "text",
          media: "",
          type: chatType || "",
        };

        response = await API("fetch", "chatbot")(
          `/chat/new-website/${config?.credentials?.username}`,
          {
            headers: {
              Signature: signature,
              Accept: "text/event-stream",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(chatbotPayload),
            method: "POST",
            signal: abortController.signal,
          }
        );
      }

      if (!response.ok) {
        console.error("Failed to send message");
        return;
      }

      const reader = response
        .body!.pipeThrough(new TextDecoderStream())
        .getReader();

      if (isWebsite) {
        let buffer = "";
        while (true) {
          if (abortController.signal.aborted) break;
          const { value, done } = await reader.read();
          if (done) break;

          buffer += value;
          const parts = buffer.split("\n\n");
          buffer = parts.pop() ?? "";

          for (const part of parts) {
            const dataLines = part
              .split("\n")
              .filter((l) => l.startsWith("data:"))
              .map((l) => l.replace(/^data:\s?/, ""));

            if (!dataLines.length) continue;

            const data = dataLines.join("\n");
            const res: IESResponse = JSON.parse(data);

            if (res.event === "payload") {
              updateAiInteractionByIndex(0, {
                additional_kwargs: {},
                content: res.message,
                example: false,
              });
              if (!chatType) setChatType(res.type);
              setChatHistoryId(res.chat_history_id);
            } else if (res.event === "token") {
              if (res.data) setCurrentResponseMsg((prev) => prev + res.data);
            }
          }
        }
      } else {
        while (true) {
          if (abortController.signal.aborted) break;
          const { value, done } = await reader!.read();
          if (done) break;

          const identifier = '{"event": ';
          const events: IESResponse[] = value
            .split(`data: ${identifier}`)
            .filter(Boolean)
            .map((res) =>
              JSON.parse(`${identifier}${res}`.replace(/\n\n$/gm, ""))
            )
            .filter((res) => (res.event === "token" ? !!res.data : true));

          events.forEach(async (res) => {
            if (res.event === "payload") {
              updateAiInteractionByIndex(0, {
                additional_kwargs: {},
                content: res.message,
                example: false,
              });
              if (!chatType) setChatType(res.type);
              setChatHistoryId(res.chat_history_id);
            } else if (res.event === "token") {
              setCurrentResponseMsg((prev) => prev + res.data);
            }
          });
        }
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.name === "AbortError") {
        // Request dibatalkan, tidak perlu tampilkan error
      } else {
        console.error("Maaf, terjadi kesalahan sistem. Silakan coba lagi!");
      }
    } finally {
      setLoading(false);
      abortControllerRef.current = null;
    }
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;

  //     if (
  //       !target.closest("#mimin-widget-main") &&
  //       !target.closest("#mimin-widget-btn-trigger")
  //     ) {
  //       handleToggleChatWindow();
  //     }
  //   };

  //   if (isChatVisible) {
  //     document.addEventListener("click", handleClickOutside);
  //   }

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [isChatVisible]);

  useEffect(() => {
    if (config?.widgetType !== "website") return;
    if (!chatHistoryId && !config?.credentials?.websiteId) return;

    const playNotificationSound = () => {
      try {
        const audio = new Audio('/sounds/notification.mp3')
        audio.volume = 1
        audio.play().catch((error) => { })
      } catch (error) {
      }
    }
    
    const socket = io(ENV.NEXT_PUBLIC_API_SOCKET, {
      path: ENV.NEXT_PUBLIC_API_SOCKET_PATHNAME,
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
    });

    socketRef.current = socket;

    socket.on("connect", () => {
      if (socket.connected) {
        if (chatHistoryId) {
          socket.emit("joinRoom", chatHistoryId); 
        }
        if (config?.credentials?.websiteId && phoneOrIP?.value) {
          socket.emit("joinRoom", `${config.credentials.websiteId}-${phoneOrIP.value}`);
        }
      }
    });

    const handleEndSession = (data: { message: string }) => {
      const msg = data.message || "";
      addInteraction({
        human: undefined,
        ai: { content: msg, additional_kwargs: {}, example: false },
        date: new Date(),
        id: crypto.randomUUID(),
      });
      setCurrentResponseMsg(msg);
    };

    const handleReminderFired = (data: { message: string }) => {
      const msg = data.message || "";
      addInteraction({
        human: undefined,
        ai: { content: msg, additional_kwargs: {}, example: false },
        date: new Date(),
        id: crypto.randomUUID(),
      });
      setCurrentResponseMsg(msg);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleWebsiteMessage = (data: any) => {
      const payload = data.payload || data;
      const message =
        payload.text ||
        (typeof payload.message === "object"
          ? payload.message?.text
          : payload.message) ||
        payload.message;

      if (message && typeof message === "string") {
        playNotificationSound()
        addInteraction({
          human: undefined,
          ai: {
            content: message,
            additional_kwargs: payload.additional_kwargs || {},
            example: false,
          },
          date: new Date(),
          id: data.message_id || crypto.randomUUID(),
        });
        setCurrentResponseMsg(message);
      }
    };

    socket.on("endSession", handleEndSession);
    socket.on("reminderFired", handleReminderFired);
    socket.on("websiteMessage", handleWebsiteMessage);

    return () => {
      socket.off("endSession", handleEndSession);
      socket.off("reminderFired", handleReminderFired);
      socket.off("websiteMessage", handleWebsiteMessage);
      socket.disconnect();
    };
  }, [chatHistoryId, addInteraction, config?.credentials?.websiteId, phoneOrIP]);

  useEffect(() => {
    setConfigStore(config || null);
    setSignatureStore(signature || "");
    // Cleanup: batalkan request jika komponen unmount
    return () => {
      cancelSendMessage();
      socketRef.current?.disconnect();
    };
  }, []);


  useEffect(() => {
    if (!config) return;

    (async () => {
      let phoneOrIP: { name: string, value: string } | null = null;

      if (config.theme?.chatWindow.needAuthentication) {
        const token = localStorage.getItem(`mimin-token-${config.credentials?.username}`);

        if (token) {
          try {
            const res = await API("fetch", "customer")(`/v1/customer/get-by-token/${config.credentials?.username}`, {
              method: "GET",
              headers: {
                "x-api-key": config.credentials?.apiKey || '',
                "Authorization-Customer": `Bearer ${token}`
              },
            });

            if (!res.ok) {
              if (res.status === 401) localStorage.delete(`mimin-token-${config.credentials?.username}`);
              else throw Error('Failed to get customer data');
            } else {
              const data = await res.json();
              phoneOrIP = { name: data.data.name, value: data.data.phone };
              setIsAuthenticated(true);
            }
          } catch (error) {
            throw Error('Failed to get customer data');
          }
        }
      } else {
        const { isError, errorMessage, ip } = await getClientInfo();
        if (isError) throw Error(errorMessage);
        phoneOrIP = { name: '', value: ip! }
      }

      setPhoneOrIP(phoneOrIP);
    })();
  }, [config]);

  const backgroundButtonColor = isChatVisible
    ? config?.theme?.button?.backgroundColor
    : config?.theme?.button?.backgroundColor + "80" || "#ffffff";

  const textButtonColor = isChatVisible
    ? config?.theme?.button?.textColor
    : config?.theme?.button?.backgroundColor || "#0096a2";

  return (
    <AnimatePresence>
      <div className="mimin-fixed mimin-bottom-6 mimin-right-6 mimin-z-[9999]">
        {/* Chat Button */}
        <button
          id="mimin-widget-btn-trigger"
          className="mimin-relative mimin-flex mimin-items-center mimin-gap-2.5 mimin-px-4 mimin-py-2 mimin-rounded-full mimin-border mimin-border-[#0096a2] mimin-shadow-md mimin-transition-all mimin-duration-300 mimin-ease-in-out mimin-cursor-pointer"
          style={{
            backgroundColor: backgroundButtonColor,
            color: textButtonColor,
          }}
          onClick={handleToggleChatWindow}
        >
          <img
            src={
              config?.theme?.button?.iconSrc ||
              "/icons/favicon.ico"
            }
            onError={(e) => {
              // Ganti gambar ke default jika error load gambar
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Hindari infinite loop jika default image juga error
              target.src = "/icons/favicon.ico";
            }}
            alt=" "
            className="mimin-w-4 mimin-h-auto"
          />
          <span className="mimin-text-sm mimin-font-bold">
            {config?.theme?.button?.tooltip || "Ask Mimin"}
          </span>

          {/* Badge Notifikasi */}
          {isCallVisible && !isChatVisible && (
            <motion.div
              key="call-badge"
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mimin-absolute -mimin-top-3 mimin-right-0 mimin-text-white mimin-px-1.5 mimin-py-0.5 mimin-text-[10px] mimin-rounded-full mimin-bg-red-500 mimin-animate-pulse"
            >
              In Call
            </motion.div>
          )}
        </button>

        {/* Chat Window */}
        {shouldRenderChat && (
          <motion.div
            id="mimin-widget-main"
            className="mimin-absolute mimin-bottom-full mimin-mb-4 mimin-right-0"
            initial={{ opacity: 0, y: 20 }}
            animate={
              isChatVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
            }
            transition={{ duration: 0.3, ease: "easeOut" }}
            onAnimationComplete={() => {
              if (!isChatVisible) {
                setShouldRenderChat(false);
              }
            }}
          >
            <div
              className="mimin-relative mimin-flex mimin-flex-col mimin-border mimin-border-gray-200 mimin-rounded-xl mimin-shadow-lg mimin-overflow-hidden"
              style={{
                width: config?.theme?.chatWindow?.width || "330px",
                height: config?.theme?.chatWindow?.height || "600px",
                backgroundColor:
                  config?.theme?.chatWindow?.body?.backgroundColor || "#ffffff",
              }}
            >
              {(config?.theme?.chatWindow.needAuthentication || false) &&
                !isAuthenticated &&
                !isFirstTime && (
                  <AuthWindow
                    onSuccessLogin={(token, phone) => {
                      setPhoneOrIP(phone);
                      setIsAuthenticated(!!token);
                    }}
                  />
                )}
              {(isAuthenticated ||
                !(config?.theme?.chatWindow.needAuthentication || false)) &&
                !isFirstTime && (
                  <>
                    <ChatHeader
                      onToggleCallWindow={handleToggleCallWindow}
                      onToggleChatWindow={handleToggleChatWindow}
                    />
                    <ChatContent
                      messages={interactions}
                      currentResponseMsg={currentResponseMsg}
                      loading={loading}
                      fetching={fetching}
                    />
                    <ChatInput
                      onSendMessage={(message) => {
                        setCurrentResponseMsg("");
                        message = message.trim().replaceAll(/\n\n+/g, "\n\n");
                        const newInteraction = {
                          human: {
                            content: message,
                            additional_kwargs: {},
                            example: false,
                          },
                          date: new Date(),
                          id: crypto.randomUUID(),
                        };

                        addInteraction(newInteraction);

                        handleSendMessage(message);
                      }}
                      loading={loading}
                      fetching={fetching}
                      onCancelSendMessage={cancelSendMessage} // Anda bisa teruskan ke ChatInput jika ingin tombol cancel
                    />
                    {voiceAgent === 'openai' ? (
                      <OpenAiAgentVoiceLayout
                        isVisible={isCallVisible}
                        onToggleCallWindow={handleToggleCallWindow}
                      />
                    ) : (
                      <ElevenLabsAgentVoiceLayout
                        isVisible={isCallVisible}
                        onToggleCallWindow={handleToggleCallWindow}
                        phoneOrIP={phoneOrIP}
                      />
                    )}
                  </>
                )}
              {isFirstTime &&
                (config?.theme?.chatWindow?.enableGreating || false) && (
                  <StartChatSection
                    onClickStartChat={() => {
                      setIsFirstTime(false);
                    }}
                  />
                )}
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
