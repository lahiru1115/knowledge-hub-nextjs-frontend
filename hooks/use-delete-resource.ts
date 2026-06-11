import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import { resourceService } from "@/services/resource.service";

export function useDeleteResource() {
  return useMutation({
    mutationFn: resourceService.delete,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
  });
}
