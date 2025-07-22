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
import { CallWindow } from "../CallWindow";
import { useAuthStore } from "../../hooks/auth-store";
import { StartChatSection } from "./start-chat-section";
import { motion, AnimatePresence } from "framer-motion";
import { API, getClientInfo } from "../../services";

interface ChatWidgetProps {
  config?: ChatbotConfig;
  signature: string;
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
}) => {
  const [loading, setLoading] = useState(false);
  const [fetching, _setFetching] = useState(false);
  const { isFirstTime, setIsFirstTime } = useAuthStore();

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
    // Batalkan request sebelumnya jika ada
    cancelSendMessage();

    const { isError, errorMessage, ip, userAgent } = await getClientInfo();

    if (isError) {
      console.error(errorMessage);
      return;
    }

    setLoading(true);

    const payload = {
      name: userAgent,
      phone: ip,
      message_id: crypto.randomUUID(),
      message: message,
      media_type: "text",
      media: "",
      type: chatType || "",
    };

    // Buat AbortController baru untuk request ini
    const abortController = new AbortController();
    abortControllerRef.current = abortController;

    try {
      const response = await API("fetch", "chatbot")(
        `/chat/new-website/${config?.credentials?.username}`,
        {
          headers: {
            Signature: signature,
            Accept: "text/event-stream",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          method: "POST",
          signal: abortController.signal,
        }
      );

      if (!response.ok) {
        console.error("Failed to send message");
        return;
      }

      const reader = response
        .body!.pipeThrough(new TextDecoderStream())
        .getReader();

      while (true) {
        // Cek jika request sudah dibatalkan, keluar dari loop
        if (abortController.signal.aborted) {
          break;
        }

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
            const newInteraction = {
              additional_kwargs: {},
              content: res.message,
              example: false,
            };

            updateAiInteractionByIndex(0, newInteraction);

            if (!chatType) {
              setChatType(res.type);
            }

            setChatHistoryId(res.chat_history_id);
          } else if (res.event === "token") {
            setCurrentResponseMsg((prev) => prev + res.data);
          }
        });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err?.name === "AbortError") {
        // Request dibatalkan, tidak perlu tampilkan error
        // Bisa tambahkan logika lain jika ingin
        // console.log("Request dibatalkan oleh user");
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
    setConfigStore(config || null);
    setSignatureStore(signature || "");
    // Cleanup: batalkan request jika komponen unmount
    return () => {
      cancelSendMessage();
    };
  }, []);

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
              "https://appstaging.mimin.io/favicon.ico"
            }
            onError={(e) => {
              // Ganti gambar ke default jika error load gambar
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Hindari infinite loop jika default image juga error
              target.src = "https://appstaging.mimin.io/favicon.ico";
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
                !isFirstTime && <AuthWindow />}
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
                    <CallWindow
                      isVisible={isCallVisible}
                      onToggleCallWindow={handleToggleCallWindow}
                    />
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
