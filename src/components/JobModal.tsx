"use client"
import {  z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { appliedSources,statusOfApplication } from "@/lib/options";
import createJobEntry from "@/actions/jobActions";
import { updateJobEntry } from "@/actions/jobActions";
import { useState } from "react";
import { jobFormSchema as formSchema } from "@/lib/schemas";
import { jobModalProps as ModalProps } from "@/lib/types";




export function JobModal({ dialogLabel, jobTitle, companyName, appliedSource, status, Notes, Salary, id, postType }: ModalProps) {
  const [open,setOpen]=useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: jobTitle||"",
      companyName: companyName||"",
      appliedSource: appliedSource||"",
      status: status||"",
      Notes: Notes||"",
      Salary: Salary || "",
      id:id||"",
    },
  });

  async function addJobEntry(values: z.infer<typeof formSchema>) {
    createJobEntry({ ...values, Notes: values.Notes || "", Salary: values.Salary || "" })
    setOpen(false)
    form.reset();
  }

  async function updateJob(values: z.infer<typeof formSchema>) {
    updateJobEntry({
      ...values,
      id: id || "",
      Notes: values.Notes || "",
      Salary: values.Salary || ""
    });
    setOpen(false)
    form.reset();
    
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{dialogLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Make a Job Entry</DialogTitle>
          <DialogDescription>
            Add job details to track your application
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form
              onSubmit={
                postType === "add"
                  ? form.handleSubmit(addJobEntry)
                  : form.handleSubmit(updateJob)
              }
              className="space-y-4"
            >
              {/* Job Title */}
              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter job title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Company Name */}
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter company name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Applied Source & Salary side by side */}
              <div className="flex gap-4 justify-between">
                <FormField
                  control={form.control}
                  name="appliedSource"
                  render={({ field }) => (
                    <FormItem className="basis-1/2 w-full">
                      <FormLabel>Applied at</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {appliedSources.map((source, index) => (
                            <SelectItem key={index} value={source}>
                              {source}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem className="basis-1/2">
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {statusOfApplication.map((source, index) => (
                            <SelectItem key={index} value={source}>
                              {source}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Status */}

              {/* Notes */}
              <FormField
                control={form.control}
                name="Notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Input placeholder="Any additional info..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
