"use client";

import { PageHeader } from "@/components/shared/page-header";

import { EmptyState } from "@/components/shared/empty-state";

import { CollectionCard } from "@/components/collections/collection-card";

import { CreateCollectionDialog } from "@/components/collections/create-collection-dialog";

import { useCollections } from "@/hooks/use-collections";

export default function CollectionsPage() {
  const { data, isLoading } = useCollections();

  return (
    <>
      <PageHeader
        title="Collections"
        description="Organize your resources"
        action={<CreateCollectionDialog />}
      />

      {isLoading && <div>Loading...</div>}

      {!isLoading && data?.length === 0 && (
        <EmptyState
          title="No collections"
          description="Create your first collection"
        />
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {data?.map((collection: any) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>
    </>
  );
}
