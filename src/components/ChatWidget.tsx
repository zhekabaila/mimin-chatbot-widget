import React, { useEffect, useState } from "react";
import type {
  ChatbotConfig,
  ConversationsResponse,
  IESResponse,
} from "../types";
import { useConfigStore } from "../hooks/config-store";
import { ENV } from "../config/environment";
import { useInteractionsStore } from "../hooks/interaction-store";
import AuthWindow from "./AuthWindow";
import { ChatHeader } from "./ChatHeader";
import { ChatContent } from "./Message";
import { ChatInput } from "./ChatInput";
import { CallWindow } from "./CallWindow";

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

  // const [chatType, setChatType] = useState("");
  const [chatHistoryId, setChatHistoryId] = useState("");
  const [currentResponseMsg, setCurrentResponseMsg] = useState("");
  const [pagination, setPagination] =
    useState<Omit<ConversationsResponse, "data">>(INIT_PAGINATION);

  const { setConfig: setConfigStore, setSignature: setSignatureStore } =
    useConfigStore();

  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isCallVisible, setIsCallVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {
    interactions,
    addInteraction,
    updateAiInteractionByIndex,
    chatType,
    setChatType,
  } = useInteractionsStore();

  const handleToggleChatWindow = () => {
    setIsChatVisible(!isChatVisible);
  };

  const handleToggleCallWindow = () => {
    setIsCallVisible(!isCallVisible);
  };

  const getClientInfo = async () => {
    try {
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();

      const ip = ipData.ip;
      const userAgent = navigator.userAgent;

      return { ip, userAgent, isError: false };
    } catch (error) {
      return { isError: true, errorMessage: (error as Error).message };
    }
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
      const response = await fetch(
        `${ENV.NEXT_PUBLIC_CHATBOT_URL}/api/chat/new-website/${config?.credentials?.username}`,
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
    setConfigStore(config || null);
    setSignatureStore(signature || "");
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Chat Button */}
      <button
        className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#0096a2] shadow-md transition-all duration-300 ease-in-out cursor-pointer"
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
          className="w-4 h-auto"
        />
        <span className="text-sm font-bold">
          {config?.theme?.button?.tooltip || "Ask Mimin"}
        </span>
      </button>

      {/* Chat Window */}
      {isChatVisible && (
        <div className="absolute bottom-full mb-4 right-0">
          <div
            className="relative flex flex-col bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            style={{
              width: config?.theme?.chatWindow?.width || "330px",
              height: config?.theme?.chatWindow?.height || "600px",
            }}
          >
            {(config?.theme?.chatWindow.needAuthentication || false) &&
              !isAuthenticated && <AuthWindow />}
            {(isAuthenticated ||
              !(config?.theme?.chatWindow.needAuthentication || false)) && (
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
                  // onToggleMuteCall={handleToggleMuteCall}
                  // onToggleSpeakerCall={handleToggleSpeakerCall}
                />
              </>
            )}
            {/* <StartChatSection onClickStartChat={() => {}} /> */}
          </div>
        </div>
      )}
    </div>
  );
};
