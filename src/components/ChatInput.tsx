import React, { useState } from "react";
import { useConfigStore } from "../hooks/config-store";
import { RiSendPlane2Fill } from "react-icons/ri";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  loading: boolean;
  fetching: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  loading,
  fetching,
}) => {
  const [message, setMessage] = useState("");
  const { config } = useConfigStore();

  const handleSendMessage = () => {
    if (!fetching && !loading && message.length > 0) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div
      className="px-2 pt-2 pb-1 overflow-hidden max-h-full"
      style={{
        backgroundColor:
          config?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none",
      }}
    >
      <div className="relative flex items-center gap-2">
        <input
          type="text"
          className="flex-1 border rounded-md p-2 bg-white pr-10 focus:outline focus:outline-[#ffa100]"
          style={{
            borderColor:
              config?.theme?.chatWindow?.textInput?.borderColor || "#ffffff",
          }}
          placeholder={
            config?.theme?.chatWindow?.textInput?.placeholder ||
            "Ketik pertanyaan Anda..."
          }
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              e.stopPropagation();
              handleSendMessage();
            }
          }}
        />
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={loading || message.trim().length === 0}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleSendMessage();
          }}
        >
          <RiSendPlane2Fill
            className="w-4 h-4 text-[#0096a2]"
            color={
              config?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
            }
          />
        </button>
      </div>
      <p className="text-white text-[10px] font-medium text-center mt-1">
        Powered by{" "}
        <a href="https://mimin.io" className="underline">
          Mimin
        </a>
      </p>
    </div>
  );
};
