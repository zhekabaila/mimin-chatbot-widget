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
          "mimin-relative mimin-flex mimin-w-fit mimin-max-w-[90%] mimin-border mimin-rounded-t-2xl mimin-py-3 mimin-px-3.5 mimin-rounded-br-2xl mimin-bg-white mimin-text-[#0096a2] mimin-border-[#0096a2] mimin-mr-auto mimin-justify-start"
        )}
        style={{
          backgroundColor:
            config?.theme?.chatWindow?.botMessage?.backgroundColor || "#ffffff",
          borderColor:
            config?.theme?.chatWindow?.botMessage?.borderColor || "#0096a2",
        }}
      >
        <div
          className="mimin-text-sm"
          style={{
            color:
              config?.theme?.chatWindow?.botMessage?.textColor || "#0096a2",
          }}
        >
          <div className="mimin-flex mimin-gap-3">
            <div className="mimin-text-base mimin-flex mimin-gap-2 mimin-items-end">
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={`loading-circle-${index}`}
                  className="mimin-block mimin-w-2 mimin-h-2 mimin-rounded-full mimin-bg-[#0096a2] mimin-animate-bounce"
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
        "mimin-relative mimin-flex mimin-w-fit mimin-max-w-[90%] mimin-border mimin-rounded-t-3xl mimin-py-3 mimin-px-3.5" +
          (!isUser
            ? " mimin-rounded-br-3xl mimin-bg-white mimin-text-[#0096a2] mimin-border-[#0096a2] mimin-mr-auto mimin-justify-start"
            : " mimin-rounded-bl-3xl mimin-bg-white mimin-text-[#0096a2] mimin-border-[#0096a2] mimin-ml-auto mimin-justify-end")
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
          "mimin-flex mimin-items-end mimin-gap-3" +
            (isUser ? " mimin-flex-row-reverse" : " mimin-flex-row")
        )}
      >
        <div className="mimin-flex mimin-items-end mimin-justify-center mimin-w-3 mimin-h-3">
          {isUser ? (
            <img
              src={
                config?.theme?.chatWindow?.userMessage?.iconUrl ||
                "https://res.cloudinary.com/dctqloe37/image/upload/v1752570930/circle-user-round_1_ja2oac.svg"
              }
              alt=" "
              width={100}
              height={100}
              className="mimin-w-3 mimin-h-3 mimin-aspect-square"
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
              className="mimin-w-3 mimin-h-3 mimin-aspect-square"
            />
          )}
        </div>
        <div
          className="mimin-text-sm mimin-flex-1 mimin-pb-2"
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
          "mimin-absolute mimin-top-full mimin-mt-0.5 mimin-w-fit" +
            (isUser ? " mimin-right-0" : " mimin-left-0")
        )}
      >
        <p className="mimin-text-[10px] mimin-font-light mimin-text-gray-500 mimin-w-max">
          {format(new Date(date), "dd MMMM yyyy, HH:mm")}
        </p>
      </div>
    </div>
  );
};

export default BubbleChat;
