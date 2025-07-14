import { create } from "zustand";

import { persist } from "zustand/middleware";

export interface IAuthCookie {
  id: string;
  token: string;
  phone: string;
  email: string;
  name: string;
  isActivated: boolean;
}

interface AuthStore {
  user: IAuthCookie | null;
  setUser: (user: IAuthCookie | null) => void;
}

export const useConfigStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-store",
    }
  )
);
