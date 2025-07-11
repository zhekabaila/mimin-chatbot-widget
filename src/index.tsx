import ReactDOM from "react-dom/client";
import type { ChatbotConfig } from "./types";
import { injectStyle } from "./utils/styleInjector";
import { ENV } from "./config/environment";
import { ChatWidget } from "./components/ChatWidget";

// Export main Chatbot interface for React
export interface ChatbotInterface {
  init: (config?: ChatbotConfig) => void;
}

const Chatbot: ChatbotInterface = {
  init: async function (config: ChatbotConfig = {}) {
    try {
      // Inject required styles
      injectStyle();

      // Validasi credentials jika perlu
      if (!config.credentials) {
        throw new Error("credentials are required");
      }

      if (!config.credentials.username) {
        throw new Error("username is required");
      }

      if (!config.credentials.apiKey) {
        throw new Error("apiKey is required");
      }

      // (Opsional) Ambil signature jika memang dibutuhkan
      const response = await fetch(
        `${ENV.NEXT_PUBLIC_LOGIN_CUSTOMER_API}/api/v1/chatbotdata/create-signature/${config.credentials.username}`,
        {
          method: "POST",
          headers: {
            "x-api-key": config.credentials.apiKey,
          },
        }
      );
      const { signature }: { signature: string } = await response.json();
      console.log("signature", signature);
      if (!signature) {
        throw new Error("Failed to get signature");
      }

      // Hapus widget lama jika sudah ada
      const existing = document.getElementById("mimin-widget-container");
      if (existing) existing.remove();

      // Buat container baru
      const container = document.createElement("div");
      container.id = "mimin-widget-container";
      document.body.appendChild(container);

      // Render ChatWidget ke container
      ReactDOM.createRoot(container).render(
        <>
          <ChatWidget
            config={{
              ...config,
              credentials: {
                ...config.credentials,
              },
            }}
            signature={signature}
          />
        </>
      );

      console.log("Mimin Chatbot React initialized successfully");
    } catch (error) {
      console.error("Failed to initialize Mimin Chatbot React:", error);
    }
  },
};

// Expose to window
declare global {
  interface Window {
    Chatbot: ChatbotInterface;
  }
}

window.Chatbot = Chatbot;

export { Chatbot };
