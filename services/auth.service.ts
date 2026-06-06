import { api } from "@/lib/axios";
import { LoginRequest, RegisterRequest } from "@/types/auth";

export const authService = {
  register: async (data: RegisterRequest) => {
    const response = await api.post("/auth/register", data);

    return response.data;
  },

  login: async (data: LoginRequest) => {
    const response = await api.post("/auth/login", data);

    return response.data;
  },

  me: async () => {
    const response = await api.get("/auth/me");

    return response.data;
  },

  logout: async () => {
    const response = await api.post("/auth/logout");

    return response.data;
  },
};
