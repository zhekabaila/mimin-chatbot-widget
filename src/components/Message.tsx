import React from "react";
import { useConfigStore } from "../hooks/config-store";
import type { Interaction } from "../types";
import { cn } from "../utils";

interface UserMessageProps {
  message: string;
}

export const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
  const { config } = useConfigStore();
  return (
    <div
      className="relative flex justify-end w-fit max-w-[90%] ml-auto bg-[#0096a2] border border-[#0096a2] rounded-t-2xl rounded-bl-2xl py-3 px-3.5"
      style={{
        backgroundColor:
          config?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2",
        borderColor:
          config?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2",
      }}
    >
      <p
        className="text-sm"
        style={{
          color: config?.theme?.chatWindow?.userMessage?.textColor || "#ffffff",
        }}
      >
        {message}
      </p>
      <div className="absolute top-full mt-0.5 right-0 w-fit">
        <p className="text-[10px] font-light text-gray-500">02.30 PM</p>
      </div>
    </div>
  );
};

interface BotMessageProps {
  message: string;
}

export const BotMessage: React.FC<BotMessageProps> = ({ message }) => {
  const { config } = useConfigStore();
  return (
    <div
      className="relative flex justify-start w-fit max-w-[90%] mr-auto bg-white border border-[#0096a2] rounded-t-2xl rounded-br-2xl py-3 px-3.5"
      style={{
        backgroundColor:
          config?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor:
          config?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2",
      }}
    >
      <p
        className="text-sm"
        style={{
          color: config?.theme?.chatWindow?.botMessage?.textColor || "#0096a2",
        }}
      >
        {message}
      </p>
      <div className="absolute top-full mt-0.5 left-0 w-fit">
        <p className="text-[10px] font-light text-gray-500">02.30 PM</p>
      </div>
    </div>
  );
};

export const MessageBubble: React.FC<{
  message?: string;
  isUser?: boolean;
  thinking?: boolean;
}> = ({ message, isUser = false, thinking = false }) => {
  const { config } = useConfigStore();
  const processMessage = (message: string, isOwn: boolean) => {
    // Handle existing HTML tags first
    const htmlProcessed = message.replace(
      /<a href="([^"]+)"[^>]*>(.*?)<\/a>/g,
      `<a href="$1" target="_blank" style="color: ${
        isOwn ? "#ffffff" : "#1565c0"
      }; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$2</a>`
    );

    // Replace *text* with <strong>text</strong>
    const boldProcessed = htmlProcessed.replace(
      /\*(.*?)\*/g,
      "<strong>$1</strong>"
    );

    // Replace [text](url) with <a href="url">text</a>
    const markdownLinkProcessed = boldProcessed.replace(
      /\[(.*?)\]\((https?:\/\/[^\s]+)\)/g,
      `<a href="$2" target="_blank" style="color: ${
        isOwn ? "#ffffff" : "#1565c0"
      }; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$1</a>`
    );

    // Replace plain URLs with clickable links, avoiding already transformed markdown links
    const linkProcessed = markdownLinkProcessed.replace(
      /(?<!href=")https?:\/\/[^\s"]+/g,
      `<a href="$&" target="_blank" style="color: ${
        isOwn ? "#ffffff" : "#1565c0"
      }; text-decoration-line: underline; word-break: break-word; white-space: normal;" rel="noopener noreferrer">$&</a>`
    );

    // Replace \n with <br>
    return linkProcessed.replace(/\n/g, "<br>");
  };

  if (thinking) {
    return (
      <div
        className={cn(
          "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5 rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
        )}
        style={{
          backgroundColor:
            config?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
          borderColor:
            config?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2",
        }}
      >
        <div
          className="text-sm"
          style={{
            color:
              config?.theme?.chatWindow?.botMessage?.textColor || "#0096a2",
          }}
        >
          <div className="flex gap-3">
            <div className="text-base flex gap-2 items-end">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={`loading-circle-${index}`}
                  className="block w-2 h-2 rounded-full bg-[#0096a2] animate-bounce"
                  style={{ animationDelay: `${250 * index}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!message) {
    console.error("message is null!");
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex w-fit max-w-[90%] border rounded-t-2xl py-3 px-3.5",
        !isUser
          ? "rounded-br-2xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
          : "rounded-bl-2xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end"
      )}
      style={{
        backgroundColor: isUser
          ? config?.theme?.chatWindow?.userMessage?.backgroundColor || "#0096a2"
          : config?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
        borderColor: isUser
          ? config?.theme?.chatWindow?.userMessage?.borderColor || "#0096a2"
          : config?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2",
      }}
    >
      <div
        className="text-sm"
        style={{
          color: isUser
            ? config?.theme?.chatWindow?.userMessage?.textColor || "#ffffff"
            : config?.theme?.chatWindow?.botMessage?.textColor || "#0096a2",
        }}
        dangerouslySetInnerHTML={{
          __html: processMessage(message, isUser),
        }}
      />
      <div
        className={cn(
          "absolute top-full mt-0.5 w-fit",
          isUser ? "right-0" : "left-0"
        )}
      >
        <p className="text-[10px] font-light text-gray-500">02.30 PM</p>
      </div>
    </div>
  );
};

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
      console.log("scroll to bottom ------>>>>>>");
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
                <MessageBubble message={msg.human.content} isUser={true} />
              )}
              {msg.ai && msg.ai.content && (
                <MessageBubble message={msg.ai.content} isUser={false} />
              )}
            </div>
          ))}
        </div>
        {!fetching &&
          currentResponseMsg &&
          messages.length > 0 &&
          !messages[0]?.ai && (
            <MessageBubble message={currentResponseMsg} isUser={false} />
          )}
        {loading && !currentResponseMsg && <MessageBubble thinking={true} />}
      </div>
      <div ref={bottomRef} id="bottom-ref" className="pb-9" />
    </div>
  );
};
