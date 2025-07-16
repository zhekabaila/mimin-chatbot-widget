import { AudioLines } from "lucide-react";
import React, { useState } from "react";
import { MdPhone } from "react-icons/md";

interface CallWindowProps {
  isVisible: boolean;
  onToggleCallWindow: () => void;
  // onToggleMuteCall: () => void;
  // onToggleSpeakerCall: () => void;
}

export const CallWindow: React.FC<CallWindowProps> = ({
  isVisible,
  onToggleCallWindow,
  // onToggleMuteCall,
  // onToggleSpeakerCall,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);

  // const handleToggleMute = () => {
  //   setIsMuted(!isMuted);
  //   onToggleMuteCall();
  // };

  // const handleToggleSpeaker = () => {
  //   setIsSpeakerOn(!isSpeakerOn);
  //   onToggleSpeakerCall();
  // };

  if (!isVisible) return null;

  return (
    <div className="mimin-absolute mimin-inset-0 mimin-bg-white mimin-z-10">
      <div className="mimin-h-full mimin-px-6 mimin-py-10 mimin-overflow-y-auto">
        <div className="mimin-flex mimin-flex-col mimin-items-center mimin-justify-center">
          <h4 className="mimin-text-[#0096a2] mimin-text-xl mimin-font-bold mimin-mb-6">
            IN CALL
          </h4>
          <div className="mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-[204px] mimin-h-[204px] mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30">
            <div className="mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-full mimin-h-full mimin-bg-gradient-to-br mimin-from-[#0096a2]/40 mimin-to-[#f26075]/40">
              <div className="mimin-flex mimin-items-center mimin-justify-center mimin-p-4 mimin-rounded-full mimin-w-full mimin-h-full mimin-bg-gradient-to-br mimin-from-[#0096a2]/50 mimin-to-[#f26075]/50">
                <AudioLines className="mimin-w-14 mimin-h-14 mimin-text-white/80" />
              </div>
            </div>
          </div>
          <p className="mimin-text-[#0096a2] mimin-text-base mimin-font-bold mimin-mt-5">
            MIMIN AI
          </p>
          <p className="mimin-text-[#0096a2] mimin-text-sm mimin-font-medium mimin-mt-0">
            09:00
          </p>
          <div className="mimin-h-[1.5px] mimin-w-full mimin-bg-gray-200 mimin-my-6"></div>
          <div className="mimin-grid mimin-grid-cols-2 mimin-gap-4 mimin-w-full">
            <div className="mimin-col-span-2 mimin-flex mimin-items-center mimin-justify-center">
              <button
                type="button"
                className="mimin-cursor-pointer mimin-bg-gradient-to-br mimin-from-[#0096a2]/30 mimin-to-[#f26075]/30 mimin-rounded-full mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-flex mimin-items-center mimin-justify-center"
                onClick={onToggleCallWindow}
              >
                <MdPhone className="mimin-w-full mimin-h-full mimin-text-[#f26075]/90 mimin-rotate-90" />
              </button>
            </div>
            {/* <div className="mimin-flex mimin-items-center mimin-justify-center">
              <button
                type="button"
                className={cn(
                  "mimin-cursor-pointer mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-rounded-full mimin-flex mimin-items-center mimin-justify-center",                  isMuted
                    ? "mimin-bg-gradient-to-br mimin-from-white/60 mimin-to-[#ffa100]/60"
                    : "mimin-bg-gradient-to-br mimin-from-white/20 mimin-to-[#ffa100]/20"
                )}
                onClick={handleToggleMute}
              >
                <MdPhone className="mimin-w-full mimin-h-full mimin-text-[#f26075]/90 mimin-rotate-90" />
              </button>
            </div>
            {/* <div className="mimin-flex mimin-items-center mimin-justify-center">
              <button
                type="button"
                className={cn(
                  "mimin-cursor-pointer mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-rounded-full mimin-flex mimin-items-center mimin-justify-center",
                  isMuted
                    ? "mimin-bg-gradient-to-br mimin-from-white/60 mimin-to-[#ffa100]/60"
                    : "mimin-bg-gradient-to-br mimin-from-white/20 mimin-to-[#ffa100]/20"
                )}
                onClick={handleToggleMute}
              >
                <Mic className={cn("mimin-w-full mimin-h-full mimin-text-[#0096a2]/90")} />
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="button"
                className={cn(
                  "mimin-cursor-pointer mimin-w-[60px] mimin-h-[60px] mimin-p-4 mimin-aspect-square mimin-rounded-full mimin-flex mimin-items-center mimin-justify-center",
                  !isSpeakerOn
                    ? "mimin-bg-gradient-to-br mimin-from-white/60 mimin-to-[#ffa100]/60"
                    : "mimin-bg-gradient-to-br mimin-from-white/20 mimin-to-[#ffa100]/20"
                )}
                onClick={handleToggleSpeaker}
              >
                <Volume2 className={cn("mimin-w-full mimin-h-full mimin-text-[#0096a2]/90")} />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
