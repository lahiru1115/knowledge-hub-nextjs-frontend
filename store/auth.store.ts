import { create } from "zustand";
import { AuthState } from "../types/auth";

export const useAuthStore =
  create<AuthState>((set) => ({
    user: null,

    setUser: (user) =>
      set({ user }),
  }));