import { AudioLines, Mic, Phone, Volume2 } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../utils";

interface CallWindowProps {
  isVisible: boolean;
  onToggleCallWindow: () => void;
  onToggleMuteCall: () => void;
  onToggleSpeakerCall: () => void;
}

export const CallWindow: React.FC<CallWindowProps> = ({
  isVisible,
  onToggleCallWindow,
  onToggleMuteCall,
  onToggleSpeakerCall,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    onToggleMuteCall();
  };

  const handleToggleSpeaker = () => {
    setIsSpeakerOn(!isSpeakerOn);
    onToggleSpeakerCall();
  };

  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-white z-10">
      <div className="h-full px-6 py-10 overflow-y-auto">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-[#0096a2] text-xl font-bold mb-6">IN CALL</h4>
          <div className="flex items-center justify-center p-4 rounded-full w-[204px] h-[204px] bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30">
            <div className="flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/40 to-[#f26075]/40">
              <div className="flex items-center justify-center p-4 rounded-full w-full h-full bg-gradient-to-br from-[#0096a2]/50 to-[#f26075]/50">
                <AudioLines className="w-14 h-14 text-white/80" />
              </div>
            </div>
          </div>
          <p className="text-[#0096a2] text-base font-bold mt-5">MIMIN AI</p>
          <p className="text-[#0096a2] text-sm font-medium mt-0">09:00</p>
          <div className="h-[1.5px] w-full bg-gray-200 my-6"></div>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="col-span-2 flex items-center justify-center">
              <button
                type="button"
                className="cursor-pointer bg-gradient-to-br from-[#0096a2]/30 to-[#f26075]/30 rounded-full w-[60px] h-[60px] p-4 aspect-square flex items-center justify-center"
                onClick={onToggleCallWindow}
              >
                <Phone className="w-full h-full text-[#f26075]/90 fill-[#f26075]/90" />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className={cn(
                  "cursor-pointer w-[60px] h-[60px] p-4 aspect-square rounded-full flex items-center justify-center",
                  isMuted
                    ? "bg-gradient-to-br from-white/60 to-[#ffa100]/60"
                    : "bg-gradient-to-br from-white/20 to-[#ffa100]/20"
                )}
                onClick={handleToggleMute}
              >
                <Mic className={cn("w-full h-full text-[#0096a2]/90")} />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className={cn(
                  "cursor-pointer w-[60px] h-[60px] p-4 aspect-square rounded-full flex items-center justify-center",
                  !isSpeakerOn
                    ? "bg-gradient-to-br from-white/60 to-[#ffa100]/60"
                    : "bg-gradient-to-br from-white/20 to-[#ffa100]/20"
                )}
                onClick={handleToggleSpeaker}
              >
                <Volume2 className={cn("w-full h-full text-[#0096a2]/90")} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
