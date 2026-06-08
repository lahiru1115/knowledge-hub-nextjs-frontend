import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import { resourceService } from "@/services/resource.service";

export function useCreateResource() {
  return useMutation({
    mutationFn: resourceService.create,
    
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
  });
}
