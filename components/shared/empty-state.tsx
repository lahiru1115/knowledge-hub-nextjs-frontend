interface Props {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description,
}: Props) {
  return (
    <div className="rounded-xl border p-12 text-center">
      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}