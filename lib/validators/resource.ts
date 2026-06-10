import { z } from "zod";

export const createResourceSchema = z.object({
  title: z.string().min(2).max(255),
  url: z.url().optional().or(z.literal("")),
  notes: z.string().optional(),
  resource_type: z.enum(["article", "video", "pdf", "website", "other"]),
  tag_ids: z.array(z.string()).optional(),
});

export type CreateResourceForm = z.infer<typeof createResourceSchema>;
