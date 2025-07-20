import React, { useEffect, useState } from "react";
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
    } catch {
      console.error(
        "We apologize, a system error has occurred. Please try again!"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        !target.closest("#mimin-widget-main") &&
        !target.closest("#mimin-widget-btn-trigger")
      ) {
        handleToggleChatWindow();
      }
    };

    if (isChatVisible) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isChatVisible]);

  useEffect(() => {
    setConfigStore(config || null);
    setSignatureStore(signature || "");
  }, []);

  return (
    <AnimatePresence>
      <div className="mimin-fixed mimin-bottom-6 mimin-right-6 mimin-z-[9999]">
        {/* Chat Button */}
        <button
          id="mimin-widget-btn-trigger"
          className="mimin-relative mimin-flex mimin-items-center mimin-gap-2.5 mimin-px-4 mimin-py-2 mimin-rounded-full mimin-border mimin-border-[#0096a2] mimin-shadow-md mimin-transition-all mimin-duration-300 mimin-ease-in-out mimin-cursor-pointer"
          style={{
            backgroundColor: isChatVisible
              ? "#0096a2"
              : config?.theme?.button?.backgroundColor || "#ffffff",
            color: isChatVisible
              ? "#ffffff"
              : config?.theme?.button?.textColor || "#0096a2",
          }}
          onClick={handleToggleChatWindow}
        >
          <img
            src={
              config?.theme?.button?.iconSrc ||
              "https://appstaging.mimin.io/favicon.ico"
            }
            alt="ICON"
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
                    />
                    <CallWindow
                      isVisible={isCallVisible}
                      onToggleCallWindow={handleToggleCallWindow}
                    />
                  </>
                )}
              {isFirstTime && (
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
