import { useQuery } from "@tanstack/react-query";

import { resourceService } from "@/services/resource.service";

export function useResources(collectionId?: string) {
  return useQuery({
    queryKey: ["resources", collectionId],
    
    queryFn: () => resourceService.getAll(collectionId),
  });
}
