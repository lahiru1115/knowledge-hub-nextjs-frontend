"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { useCreateTag } from "@/hooks/use-create-tag";

export function CreateTagDialog() {
  const [open, setOpen] = useState(false);

  const mutation = useCreateTag();

  const { register, handleSubmit, reset } = useForm<{
    name: string;
  }>();

  async function onSubmit(values: { name: string }) {
    await mutation.mutateAsync(values);

    reset();

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button>New Tag</Button>} />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Tag</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Tag name" {...register("name")} />

          <Button type="submit" className="w-full">
            Create
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
