"use client";

import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

import { Resource } from "@/types/resource";

interface Props {
  resource: Resource;
  onDelete: (id: string) => void;
}

export function ResourceCard({ resource, onDelete }: Props) {
  return (
    <div className="rounded-xl border p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{resource.title}</h3>
          <p className="text-sm text-muted-foreground">
            {resource.resource_type}
          </p>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onDelete(resource.id)}
        >
          <Trash2 size={16} />
        </Button>
      </div>

      <a
        href={resource.url}
        target="_blank"
        className="mt-3 block text-sm text-blue-500"
      >
        {resource.url}
      </a>

      <div className="mt-3 flex gap-2">
        {resource.tags?.map((tag) => (
          <span
            key={tag.id}
            className="rounded-full bg-muted px-2 py-1 text-xs"
          >
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
