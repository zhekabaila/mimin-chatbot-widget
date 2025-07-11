import { create } from "zustand";
import type { Interaction } from "../types";
import { persist } from "zustand/middleware";

interface MessageStoreState {
  messages: Interaction[];
  setMessages: (messages: Interaction[]) => void;
}

export const useMessageStore = create<MessageStoreState>()(
  persist(
    (set) => ({
      messages: [],
      setMessages: (messages) => set({ messages }),
    }),
    {
      name: "message-store",
    }
  )
);
