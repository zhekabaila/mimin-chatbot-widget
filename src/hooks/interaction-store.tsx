import { create } from "zustand";
import type { Interaction, Message } from "../types";
import { persist } from "zustand/middleware";

interface InteractionsStoreState {
  interactions: Interaction[];
  chatType: string | null;
  setInteractions: (interactions: Interaction[]) => void;
  addInteraction: (interaction: Interaction) => void;
  clearInteractions: () => void;
  updateAiInteractionByIndex: (idx: number, message: Message) => void;
  setChatType: (chatType: string | null) => void;
}

export const useInteractionsStore = create<InteractionsStoreState>()(
  persist(
    (set, _get) => ({
      interactions: [],
      chatType: null,
      setInteractions: (interactions) => set({ interactions }),
      addInteraction: (interaction) =>
        set((state) => ({
          interactions: [interaction, ...state.interactions],
        })),
      updateAiInteractionByIndex: (idx, message) => {
        set((state) => ({
          interactions: state.interactions.map((i, index) =>
            index === idx ? { ...i, ai: { ...i.ai, ...message } } : i
          ),
        }));
      },
      setChatType: (chatType) => set({ chatType }),
      clearInteractions: () => set({ interactions: [] }),
    }),
    {
      name: "interactions-store",
    }
  )
);
