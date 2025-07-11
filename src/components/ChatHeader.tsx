import React from "react";
import { Phone, RotateCcw, X } from "lucide-react";
import { useConfigStore } from "../hooks/config-store";

interface ChatHeaderProps {
  onToggleCallWindow: () => void;
  onToggleChatWindow: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onToggleCallWindow,
  onToggleChatWindow,
}) => {
  const { config } = useConfigStore();
  return (
    <div
      className="flex items-center justify-between gap-2 px-4 py-2"
      style={{
        backgroundColor:
          config?.theme?.chatWindow?.backgroundColor || "#0096a2",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
          <img
            src={
              config?.theme?.chatWindow?.titleAvatarSrc ||
              "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg"
            }
            alt="ICON"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <h3
          className="text-base font-bold"
          style={{ color: config?.theme?.chatWindow?.titleColor || "#ffffff" }}
        >
          {config?.theme?.chatWindow?.title || "Mimin AI"}
        </h3>
      </div>
      <div className="flex items-center gap-4">
        {config?.theme?.chatWindow?.isActiveCall && (
          <button
            className="cursor-pointer"
            style={{
              color: config?.theme?.chatWindow?.titleColor || "#ffffff",
            }}
            onClick={onToggleCallWindow}
          >
            <Phone
              className="w-4 h-4"
              color={config?.theme?.chatWindow?.titleColor || "#ffffff"}
            />
          </button>
        )}
        <button
          className="cursor-pointer"
          style={{ color: config?.theme?.chatWindow?.titleColor || "#ffffff" }}
        >
          <RotateCcw
            className="w-4 h-4"
            color={config?.theme?.chatWindow?.titleColor || "#ffffff"}
          />
        </button>
        <button
          className="cursor-pointer"
          style={{ color: config?.theme?.chatWindow?.titleColor || "#ffffff" }}
          onClick={onToggleChatWindow}
        >
          <X
            className="w-4 h-4"
            color={config?.theme?.chatWindow?.titleColor || "#ffffff"}
          />
        </button>
      </div>
    </div>
  );
};
