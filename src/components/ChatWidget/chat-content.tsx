import React from "react";
import type { Interaction } from "../../types";
import BubbleChat from "./bubble-chat";

export const ChatContent: React.FC<{
  messages: Interaction[];
  currentResponseMsg: string;
  loading: boolean;
  fetching: boolean;
}> = ({ messages, currentResponseMsg, loading, fetching }) => {
  const bottomRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Scroll to the bottom whenever messages change
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 200);
  }, [currentResponseMsg, messages.length]);

  return (
    <div
      className="mimin-relative mimin-flex-1 mimin-h-full mimin-px-4 mimin-py-6 mimin-max-h-full mimin-overflow-y-scroll"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mimin-flex mimin-flex-col mimin-gap-9">
        <div className="mimin-flex mimin-flex-col-reverse mimin-gap-9">
          {messages.map((msg, index) => (
            <div key={index} className="mimin-flex mimin-flex-col mimin-gap-6">
              {msg.human && msg.human.content && (
                <BubbleChat
                  message={msg.human.content}
                  isUser={true}
                  date={msg.date}
                />
              )}
              {msg.ai && msg.ai.content && (
                <BubbleChat
                  message={msg.ai.content}
                  isUser={false}
                  date={msg.date}
                />
              )}
            </div>
          ))}
        </div>
        {!fetching &&
          currentResponseMsg &&
          messages.length > 0 &&
          !messages[0]?.ai && (
            <BubbleChat
              message={currentResponseMsg}
              isUser={false}
              date={new Date()}
            />
          )}
        {loading && !currentResponseMsg && (
          <BubbleChat thinking={true} date={new Date()} />
        )}
      </div>
      <div ref={bottomRef} id="bottom-ref" className="mimin-pb-9" />
    </div>
  );
};
