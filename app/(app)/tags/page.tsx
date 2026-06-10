"use client";

import { PageHeader } from "@/components/shared/page-header";

import { useTags } from "@/hooks/use-tags";

import { CreateTagDialog } from "@/components/tags/create-tag-dialog";

export default function TagsPage() {
  const { data: tags } = useTags();

  return (
    <>
      <PageHeader
        title="Tags"
        description="Manage tags"
        action={<CreateTagDialog />}
      />

      <div className="flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <div
            key={tag.id}
            className="rounded-full border px-3 py-2"
          >
            {tag.name}
          </div>
        ))}
      </div>
    </>
  );
}