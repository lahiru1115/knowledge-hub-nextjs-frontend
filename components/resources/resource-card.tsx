"use client";

import { Button } from "@/components/ui/button";

import { DeleteAlertDialog } from "@/components/shared/delete-alert-dialog";
import { useDeleteResource } from "@/hooks/use-delete-resource";

import { Resource } from "@/types/resource";

interface Props {
  resource: Resource;
  onEdit: (resource: Resource) => void;
}

export function ResourceCard({ resource, onEdit }: Props) {
  const deleteMutation = useDeleteResource();

  return (
    <div className="rounded-xl border p-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{resource.title}</h3>
          <p className="text-sm text-muted-foreground">
            {resource.resource_type}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" size="icon" onClick={() => onEdit(resource)}>
            Edit
          </Button>

          <DeleteAlertDialog
            onConfirm={() => deleteMutation.mutateAsync(resource.id)}
            isPending={deleteMutation.isPending}
          />
        </div>
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
