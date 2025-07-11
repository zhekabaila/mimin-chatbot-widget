import { create } from "zustand";
import type { ChatbotConfig } from "../types";
import { persist } from "zustand/middleware";

interface ConfigStore {
  config: ChatbotConfig | null;
  signature: string;
  setConfig: (config: ChatbotConfig | null) => void;
  setSignature: (signature: string) => void;
}

export const useConfigStore = create<ConfigStore>()(
  persist(
    (set) => ({
      config: null,
      signature: "",
      setConfig: (config) => set({ config }),
      setSignature: (signature) => set({ signature }),
    }),
    {
      name: "config-store",
    }
  )
);
