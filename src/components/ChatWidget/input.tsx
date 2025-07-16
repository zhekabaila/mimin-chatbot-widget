import React, { useRef, useState } from "react";
import { useConfigStore } from "../../hooks/config-store";
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

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Fungsi untuk auto resize
  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };

  const handleSendMessage = () => {
    if (!fetching && !loading && message.length > 0) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div
      className="mimin-px-2 mimin-pt-2 mimin-pb-1 mimin-overflow-hidden mimin-max-h-full"
      style={{
        backgroundColor:
          config?.theme?.chatWindow?.textInput?.backgroundColor || "#0096a2",
        overflowAnchor: "none",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSendMessage();
        }}
        className="mimin-relative mimin-flex mimin-items-center mimin-gap-2"
      >
        <textarea
          className="mimin-flex-1 mimin-border mimin-rounded-md mimin-p-2 mimin-max-h-[80px] mimin-bg-white mimin-pr-10 mimin-focus:outline mimin-focus:outline-[#ffa100] mimin-resize-none"
          style={{
            borderColor:
              config?.theme?.chatWindow?.textInput?.borderColor || "#ffffff",
          }}
          placeholder={
            config?.theme?.chatWindow?.textInput?.placeholder ||
            "Ketik pertanyaan Anda..."
          }
          rows={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onInput={autoResize}
          ref={textareaRef}
        />
        <button
          className="mimin-absolute mimin-right-4 mimin-top-1/2 mimin--translate-y-1/2 mimin-cursor-pointer mimin-disabled:opacity-50 mimin-disabled:cursor-not-allowed"
          disabled={loading || message.trim().length === 0}
        >
          <RiSendPlane2Fill
            className="mimin-w-4 mimin-h-4 mimin-text-[#0096a2]"
            color={
              config?.theme?.chatWindow?.textInput?.sendButtonColor || "#0096a2"
            }
          />
        </button>
      </form>
      <p className="mimin-text-white mimin-text-[10px] mimin-font-medium mimin-text-center mimin-mt-1">
        Powered by{" "}
        <a href="https://mimin.io" className="mimin-underline">
          Mimin
        </a>
      </p>
    </div>
  );
};
