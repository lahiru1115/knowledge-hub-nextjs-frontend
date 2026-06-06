import { useQuery } from "@tanstack/react-query";

import { authService } from "@/services/auth.service";

export function useAuth() {
  return useQuery({
    queryKey: ["me"],
    queryFn: authService.me,
    retry: false, // Don't retry on failure, as it may indicate that the user is not authenticated
  });
}