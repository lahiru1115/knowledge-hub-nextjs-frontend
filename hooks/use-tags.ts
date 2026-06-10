import { useQuery } from "@tanstack/react-query";

import { tagService } from "@/services/tag.service";

export function useTags() {
  return useQuery({
    queryKey: ["tags"],
    queryFn: tagService.getAll,
  });
}