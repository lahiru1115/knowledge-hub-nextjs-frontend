import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import { tagService } from "@/services/tag.service";

export function useCreateTag() {
  return useMutation({
    mutationFn: tagService.create,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tags"],
      });
    },
  });
}