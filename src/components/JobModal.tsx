
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import JobForm from "./JobForm";
export function JobModal({dialogLabel}:{dialogLabel:string}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{dialogLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Job Entry</DialogTitle>
          <DialogDescription>
            Add job details to track your application
          </DialogDescription>
        </DialogHeader>
        <JobForm />
      </DialogContent>
    </Dialog>
  );
}
