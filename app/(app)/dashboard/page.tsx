"use client";

import { PageHeader } from "@/components/shared/page-header";

export default function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Overview of your knowledge base"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-6">
          Collections
        </div>

        <div className="rounded-xl border p-6">
          Resources
        </div>

        <div className="rounded-xl border p-6">
          Tags
        </div>
      </div>
    </>
  );
}