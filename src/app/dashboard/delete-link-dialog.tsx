import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { LoaderCircle, Trash2 } from "lucide-react";
import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { deleteLinkAction } from "./_actions";
import { toast } from "sonner";

function Submit() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="h-8 w-fit px-3">
      {pending && <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />}
      Delete Link
    </Button>
  );
}

const initialState = { status: "" };

export function DeleteLinkDialog({ slug }: { slug: string }) {
  const [state, action] = useActionState(deleteLinkAction, initialState);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.status === "success") {
      setOpen(false);
      toast.success("Short link deleted");
    }
  }, [state.status]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 text-destructive"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Link</DialogTitle>
        </DialogHeader>

        <div className="p-4 rounded-md bg-neutral-50">
          <p className="text-sm text-neutral-800">
            Are you sure you want to delete the following link?
          </p>

          <p className="mt-2 text-sm text-neutral-800">
            Deleting the link will remove all of its analytics. This action
            cannot be undone, proceed with caution.
          </p>
        </div>

        <form action={action} className="flex flex-col text-left">
          <div className="p-4 rounded-md bg-neutral-50">
            <label
              htmlFor="verification"
              className="block text-sm text-neutral-700"
            >
              To verify, type <span className="font-semibold">{slug}</span>{" "}
              below.
            </label>

            <div className="flex items-center mt-1.5 rounded-md gap-1.5">
              <span className="text-sm text-muted-foreground">qysqa.link/</span>
              <Input
                required
                type="text"
                name="slug"
                placeholder="custom-slug (optional)"
                pattern={slug}
                minLength={3}
                maxLength={100}
                autoComplete="off"
              />
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-2">
            <Button
              onClick={() => setOpen(false)}
              variant="secondary"
              className="h-8 w-fit px-3"
            >
              Cancel
            </Button>
            <Submit />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
