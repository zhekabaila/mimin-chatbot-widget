import React from "react";
import { useConfigStore } from "../../hooks/config-store";
import { cn } from "../../utils";
import { format } from "date-fns";

const BubbleChat: React.FC<{
  message?: string;
  isUser?: boolean;
  thinking?: boolean;
  date: string | Date;
}> = ({ message, isUser = false, thinking = false, date }) => {
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
        "relative flex w-fit max-w-[90%] border rounded-t-3xl py-3 px-3.5",
        !isUser
          ? "rounded-br-3xl bg-white text-[#0096a2] border-[#0096a2] mr-auto justify-start"
          : "rounded-bl-3xl bg-white text-[#0096a2] border-[#0096a2] ml-auto justify-end"
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
        className={cn(
          "flex items-end gap-3",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        <div className="flex items-end justify-center w-3 h-3">
          {isUser ? (
            <img
              src={
                config?.theme?.chatWindow?.userMessage?.iconUrl ||
                "https://res.cloudinary.com/dctqloe37/image/upload/v1752570930/circle-user-round_1_ja2oac.svg"
              }
              alt=" "
              width={100}
              height={100}
              className="w-3 h-3 aspect-square"
            />
          ) : (
            <img
              src={
                config?.theme?.chatWindow?.botMessage?.iconUrl ||
                "https://appstaging.mimin.io/favicon.ico"
              }
              alt=" "
              width={100}
              height={100}
              className="w-3 h-3 aspect-square"
            />
          )}
        </div>
        <div
          className="text-sm flex-1 pb-2"
          style={{
            color: isUser
              ? config?.theme?.chatWindow?.userMessage?.textColor || "#ffffff"
              : config?.theme?.chatWindow?.botMessage?.textColor || "#0096a2",
          }}
          dangerouslySetInnerHTML={{
            __html: processMessage(message, isUser),
          }}
        />
      </div>
      <div
        className={cn(
          "absolute top-full mt-0.5 w-fit",
          isUser ? "right-0" : "left-0"
        )}
      >
        <p className="text-[10px] font-light text-gray-500 w-max">
          {format(new Date(date), "dd MMMM yyyy, HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default BubbleChat;
