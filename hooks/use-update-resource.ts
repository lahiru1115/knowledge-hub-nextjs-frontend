import { useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";

import { resourceService } from "@/services/resource.service";
import { UpdateResourcePayload } from "@/types/resource";

export function useUpdateResource() {
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateResourcePayload }) =>
      resourceService.update(id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["resources"],
      });
    },
  });
}
