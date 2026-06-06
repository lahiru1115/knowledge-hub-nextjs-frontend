import { api } from "@/lib/axios";

export const collectionService = {
  getAll: async () => {
    const response =
      await api.get("/collections");

    return response.data;
  },

  create: async (
    data: {
      name: string;
      description?: string;
    }
  ) => {
    const response =
      await api.post(
        "/collections",
        data
      );

    return response.data;
  },
};