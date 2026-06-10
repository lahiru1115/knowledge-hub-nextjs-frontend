"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useCreateResource } from "@/hooks/use-create-resource";
import { useTags } from "@/hooks/use-tags";
import { ResourceType } from "@/types/resource";

import {
  createResourceSchema,
  CreateResourceForm,
} from "@/lib/validators/resource";

interface Props {
  collectionId: string;
}

export function CreateResourceDialog({ collectionId }: Props) {
  const [open, setOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const { data: tags } = useTags();

  const { register, handleSubmit, setValue, watch, reset } =
    useForm<CreateResourceForm>({
      resolver: zodResolver(createResourceSchema),

      defaultValues: {
        title: "",
        url: "",
        notes: "",
        resource_type: ResourceType.ARTICLE,
        tag_ids: [],
      },
    });

  const mutation = useCreateResource();

  const onSubmit = async (values: CreateResourceForm) => {
    await mutation.mutateAsync({
      collection_id: collectionId,
      title: values.title,
      url: values.url,
      notes: values.notes,
      resource_type: values.resource_type as ResourceType,
      tag_ids: selectedTags,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button>New Resource</Button>} />

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Resource</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input placeholder="Title" {...register("title")} />

          <Input placeholder="URL" {...register("url")} />

          <Select
            value={watch("resource_type")}
            onValueChange={(value) =>
              setValue("resource_type", value as ResourceType)
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Resource Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={ResourceType.ARTICLE}>Article</SelectItem>
              <SelectItem value={ResourceType.VIDEO}>Video</SelectItem>
              <SelectItem value={ResourceType.PDF}>PDF</SelectItem>
              <SelectItem value={ResourceType.WEBSITE}>Website</SelectItem>
            </SelectContent>
          </Select>

          <Textarea placeholder="Notes" {...register("notes")} />

          <div>
            <label className="mb-2 block text-sm">Tags</label>

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => {
                const selected = selectedTags.includes(tag.id);

                return (
                  <button
                    key={tag.id}
                    type="button"
                    onClick={() => {
                      if (selected) {
                        setSelectedTags(
                          selectedTags.filter((id) => id !== tag.id),
                        );
                      } else {
                        setSelectedTags([...selectedTags, tag.id]);
                      }
                    }}
                    className={`rounded-full border px-3 py-1 ${
                      selected ? "bg-primary text-primary-foreground" : ""
                    }`}
                  >
                    {tag.name}
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Creating..." : "Create Resource"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
