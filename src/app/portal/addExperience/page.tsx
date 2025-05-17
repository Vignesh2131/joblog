"use client"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { useForm } from "react-hook-form";
import { Textarea } from '@/components/ui/textarea';
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import addExperienceAction from '@/actions/experienceActions';

const date = new Date();
const experienceSchema = z.object({
    jobTitle: z.string().min(3, { message: "Job title must be atleast 3 characters" }).max(30),
    companyName: z.string().min(3, { message: "Company name must be atleast 3 characters" }).max(20),
    interviewStage: z.string(),
    outcome: z.string(),
    dateOfInterview:z.date(),
    summary: z.string(),
    takeaways:z.string().optional(),
})

const AddExperience = () => {
     const form = useForm<z.infer<typeof experienceSchema>>({
       resolver: zodResolver(experienceSchema),
       defaultValues: {
         jobTitle: "",
         companyName: "",
         interviewStage: "",
         dateOfInterview:date,
         outcome: "",
         takeaways:"",
         summary: "",
       },
     });
    
  async function onSubmit(values:z.infer<typeof experienceSchema>) {
    addExperienceAction({ 
      ...values, 
      dateOfInterview: values.dateOfInterview.toISOString(),
      takeaways: values.takeaways || "" 
    })
    form.reset();
  }
  return (
    <main className="px-12 py-8">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-bold">
          Share your{" "}
          <span className="text-[#6A96F7]">Interview Experience</span>
        </h2>
        <p>Document. Reflect. Improve.</p>
      </header>
      <section id="experience-form">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
            <div className="flex gap-4">
              <div className="flex flex-col gap-y-3 basis-1/3">
                <FormField
                  control={form.control}
                  name="jobTitle"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter job title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Amazon, Google..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="interviewStage"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Interview Stage</FormLabel>
                        <FormControl>
                          <Input placeholder="Technical, HR..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="dateOfInterview"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Date of Interview</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-[240px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="outcome"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Outcome</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Selected, Rejected, In Progress"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="w-full basis-2/3">
                <FormField
                  control={form.control}
                  name="summary"
                  render={({ field }) => {
                    return (
                      <FormItem className='w-full h-full flex flex-col'>
                        <FormLabel>Experience Summary</FormLabel>
                        <FormControl>
                          <Textarea
                            className='w-full h-full'
                            placeholder="What's your experience?"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            </div>
            <div>
              <FormField
                control={form.control}
                name="takeaways"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Tips / Takeaways</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="DSA practice, Revise OS...."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </section>
    </main>
  );
}

export default AddExperience