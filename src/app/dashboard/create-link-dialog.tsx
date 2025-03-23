"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Plus } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { createLinkAction } from "./_actions";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending && <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />}
      Create Link
    </Button>
  );
}

const initialState = { status: "" };

export function CreateLinkDialog() {
  const [state, action] = useActionState(createLinkAction, initialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      setOpen(false);
      toast.success("Short link created");
    }
  }, [state.status]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" /> Create New Link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Link</DialogTitle>
          <DialogDescription>
            Enter a destination URL and optional custom slug for your short
            link.
          </DialogDescription>
        </DialogHeader>

        <form action={action} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="url"
              name="url"
              placeholder="https://example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">qysqa.link/</span>
              <Input
                type="text"
                name="slug"
                placeholder="custom-slug (optional)"
                pattern="[a-zA-Z0-9\-]+"
                title="Only letters, numbers, and hyphens are allowed"
                minLength={3}
                maxLength={100}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Submit />
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
