"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  createCollectionSchema,
  CreateCollectionForm,
} from "@/lib/validators/collection";

import { useCreateCollection } from "@/hooks/use-create-collection";

export function CreateCollectionDialog() {
  const [open, setOpen] = useState(false);

  const mutation = useCreateCollection();

  const { register, handleSubmit, reset } = useForm<CreateCollectionForm>({
    resolver: zodResolver(createCollectionSchema),
  });

  async function onSubmit(values: CreateCollectionForm) {
    await mutation.mutateAsync(values);

    reset();

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button>New Collection</Button>} />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Collection</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Name" {...register("name")} />

          <Textarea placeholder="Description" {...register("description")} />

          <Button type="submit" className="w-full">
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
