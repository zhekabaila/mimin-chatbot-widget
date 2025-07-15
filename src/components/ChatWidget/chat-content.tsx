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
      className="relative flex-1 h-full px-4 py-6 max-h-full overflow-y-scroll"
      style={{ overflowAnchor: "none" }}
    >
      <div className="flex flex-col gap-9">
        <div className="flex flex-col-reverse gap-9">
          {messages.map((msg, index) => (
            <div key={index} className="flex flex-col gap-6">
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
      <div ref={bottomRef} id="bottom-ref" className="pb-9" />
    </div>
  );
};
