import React from "react";
import { X } from "lucide-react";
import { useConfigStore } from "../../hooks/config-store";
import { useInteractionsStore } from "../../hooks/interaction-store";
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
          config?.theme?.chatWindow?.header?.backgroundColor || "#0096a2",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white">
          <img
            src={
              config?.theme?.chatWindow?.header?.avatarSrc ||
              "https://res.cloudinary.com/dctqloe37/image/upload/v1752147771/agent_ohofti.jpg"
            }
            alt="ICON"
            className="w-6 h-6 rounded-full"
          />
        </div>
        <div className="flex-1">
          <h3
            className="text-base font-bold"
            style={{
              color: config?.theme?.chatWindow?.header?.color || "#ffffff",
            }}
          >
            {config?.theme?.chatWindow?.header?.title || "MINA"}
          </h3>
          <p
            className="text-white font-light text-[9px]"
            style={{
              color: config?.theme?.chatWindow?.header?.color || "#ffffff",
            }}
          >
            {config?.theme?.chatWindow?.header?.description ||
              "Ngobrol langsung dengan AI, cepat & mudah."}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {config?.theme?.chatWindow?.isActiveCall && (
          <button
            style={{
              color: config?.theme?.chatWindow?.header?.color || "#ffffff",
            }}
            onClick={onToggleCallWindow}
            className="relative cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            // disabled={true}
          >
            <MdPhone
              className="w-5 h-5"
              color={config?.theme?.chatWindow?.header?.color || "#ffffff"}
            />
            <div className="absolute -top-0 -right-0">
              <p className="text-[8px] font-medium">AI</p>
            </div>
          </button>
        )}
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            color: config?.theme?.chatWindow?.header?.color || "#ffffff",
          }}
          onClick={() => {
            clearInteractions();
            setChatType(null);
          }}
        >
          <BiRotateLeft
            className="w-5 h-5"
            color={config?.theme?.chatWindow?.header?.color || "#ffffff"}
          />
        </button>
        <button
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            color: config?.theme?.chatWindow?.header?.color || "#ffffff",
          }}
          onClick={onToggleChatWindow}
        >
          <X
            className="w-5 h-5"
            color={config?.theme?.chatWindow?.header?.color || "#ffffff"}
          />
        </button>
      </div>
    </div>
  );
};
