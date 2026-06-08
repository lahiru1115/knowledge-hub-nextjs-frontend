import { api } from "@/lib/axios";

import { PaginatedResources, CreateResourcePayload } from "@/types/resource";

export const resourceService = {
  getAll: async (collectionId?: string): Promise<PaginatedResources> => {
    const response = await api.get("/resources", {
      params: {
        collection_id: collectionId,
      },
    });

    return response.data;
  },

  create: async (data: CreateResourcePayload) => {
    const response = await api.post("/resources", data);

    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/resources/${id}`);

    return response.data;
  },
};
