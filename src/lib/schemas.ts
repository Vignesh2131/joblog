import { z } from "zod";
export const jobFormSchema = z.object({
  jobTitle: z
    .string()
    .min(3, { message: "Job title must be at least 3 characters" })
    .max(30),
  companyName: z
    .string()
    .min(3, { message: "Company name must be at least 3 characters" })
    .max(20),
  appliedSource: z.string(),
  status: z.string(),
  Notes: z.string().optional(),
  Salary: z.string().optional(),
  id: z.string().optional(),
});
  