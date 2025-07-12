import React from "react";
import { X } from "lucide-react";
import { useConfigStore } from "../hooks/config-store";
import { useInteractionsStore } from "../hooks/interaction-store";
import { BiRotateLeft } from "react-icons/bi";
import { MdPhone } from "react-icons/md";

interface ChatHeaderProps {
  onToggleCallWindow: () => void;
  onToggleChatWindow: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  onToggleCallWindow,
  onToggleChatWindow,
}) => {
  const { config } = useConfigStore();
  const { setChatType, clearInteractions } = useInteractionsStore();
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
            style={{
              color: config?.theme?.chatWindow?.titleColor || "#ffffff",
            }}
            onClick={onToggleCallWindow}
            className="relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            // disabled={true}
          >
            <MdPhone
              className="w-5 h-5"
              color={config?.theme?.chatWindow?.titleColor || "#ffffff"}
            />
            <div className="absolute -top-0 -right-0">
              <p className="text-[8px] font-medium">AI</p>
            </div>
          </button>
        )}
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: config?.theme?.chatWindow?.titleColor || "#ffffff" }}
          onClick={() => {
            clearInteractions();
            setChatType(null);
          }}
        >
          <BiRotateLeft
            className="w-5 h-5"
            color={config?.theme?.chatWindow?.titleColor || "#ffffff"}
          />
        </button>
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ color: config?.theme?.chatWindow?.titleColor || "#ffffff" }}
          onClick={onToggleChatWindow}
        >
          <X
            className="w-5 h-5"
            color={config?.theme?.chatWindow?.titleColor || "#ffffff"}
          />
        </button>
      </div>
    </div>
  );
};
