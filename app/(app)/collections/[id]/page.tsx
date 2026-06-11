"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { Input } from "@/components/ui/input";

import { PageHeader } from "@/components/shared/page-header";
import { ResourceFormDialog } from "@/components/resources/resource-form-dialog";
import { ResourceCard } from "@/components/resources/resource-card";

import { useResources } from "@/hooks/use-resources";

import { collectionService } from "@/services/collection.service";

import { Resource } from "@/types/resource";

export default function CollectionPage() {
  const params = useParams();

  const id = params.id as string;

  const [search, setSearch] = useState("");
  const [editingResource, setEditingResource] = useState<Resource | null>(null);

  const { data: collection } = useQuery({
    queryKey: ["collection", id],

    queryFn: () => collectionService.getById(id),
  });

  const { data: resources } = useResources(id);

  const filteredResources =
    resources?.items?.filter((resource: Resource) =>
      resource.title.toLowerCase().includes(search.toLowerCase()),
    ) ?? [];

  return (
    <>
      <PageHeader
        title={collection?.name ?? "Collection"}
        description={collection?.description}
        action={<ResourceFormDialog mode="create" collectionId={id} />}
      />

      <div className="space-y-4">
        <Input
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredResources.length === 0 && (
          <div className="rounded-xl border p-8 text-center">
            No resources found
          </div>
        )}

        {filteredResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onEdit={(r) => setEditingResource(r)}
          />
        ))}
      </div>

      {editingResource && (
        <ResourceFormDialog
          mode="edit"
          resource={editingResource}
          open={true}
          onOpenChange={(open) => { if (!open) setEditingResource(null); }}
        />
      )}
    </>
  );
}
