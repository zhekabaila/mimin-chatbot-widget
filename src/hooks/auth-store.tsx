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
  isFirstTime: boolean;
  setUser: (user: IAuthCookie | null) => void;
  setIsFirstTime: (isFirstTime: boolean) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isFirstTime: true,
      setUser: (user) => set({ user }),
      setIsFirstTime: (isFirstTime) => set({ isFirstTime }),
    }),
    {
      name: "auth-store",
    }
  )
);
