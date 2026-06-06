import { useMutation } from "@tanstack/react-query";

import { queryClient } from "@/lib/query-client";

import { collectionService } from "@/services/collection.service";

export function useCreateCollection() {
  return useMutation({
    mutationFn:
      collectionService.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [
          "collections",
        ],
      });
    },
  });
}