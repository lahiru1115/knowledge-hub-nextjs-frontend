import { api } from "@/lib/axios";
import { Tag } from "@/types/tag";

export interface CreateTagPayload {
  name: string;
}

export const tagService = {
  getAll: async (): Promise<Tag[]> => {
    const response = await api.get("/tags");

    return response.data;
  },

  create: async (
    payload: CreateTagPayload
  ): Promise<Tag> => {
    const response = await api.post(
      "/tags",
      payload
    );

    return response.data;
  },
};