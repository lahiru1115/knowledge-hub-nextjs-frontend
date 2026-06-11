import { Tag } from "./tag";

export enum ResourceType {
  ARTICLE = "article",
  VIDEO = "video",
  PDF = "pdf",
  WEBSITE = "website",
  OTHER = "other",
}

export interface Resource {
  id: string;
  collection_id: string;

  title: string;
  url?: string;

  notes?: string;

  resource_type: ResourceType;

  tags?: Tag[];
}

export interface PaginatedResources {
  items: Resource[];
  page: number;
  page_size: number;
  total: number;
}

export interface CreateResourcePayload {
  collection_id: string;
  title: string;
  url?: string;
  notes?: string;
  resource_type: ResourceType;
  tag_ids?: string[];
}

export interface UpdateResourcePayload {
  title: string;
  url?: string;
  notes?: string;
  resource_type: ResourceType;
  tag_ids?: string[];
}