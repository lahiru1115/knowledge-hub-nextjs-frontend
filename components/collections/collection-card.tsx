import Link from "next/link";

import { Collection } from "@/types/collection";

interface Props {
  collection: Collection;
}

export function CollectionCard({ collection }: Props) {
  return (
    <Link
      href={`/collections/${collection.id}`}
      className="block rounded-xl border p-5 transition hover:shadow-md"
    >
      <h3 className="font-semibold">{collection.name}</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        {collection.description}
      </p>
    </Link>
  );
}
