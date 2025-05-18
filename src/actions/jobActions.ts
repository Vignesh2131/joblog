"use server"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";
type FormData = {
  jobTitle: string;
  companyName: string;
  appliedSource: string;
  status: string;
  Notes: string;
  Salary: string;
  id?: string;
};
export default async function createJobEntry(values: FormData) {
    try {
        const { userId } = await auth();
        const user = await prisma.user.findUnique({
          where: {
            clerkId: userId || "",
          },
        });
        if (!user) {
           throw new Error("User not found")
        }
        const entry = await prisma.job.create({
          data: {
            jobTitle: values.jobTitle || "",
            companyName: values.companyName || "",
            Salary: values.Salary || "",
            appliedSource: values.appliedSource || "",
            Notes: values.Notes || "",
            status: values.status || "",
            userId: user?.id || "",
          },
        });
        console.log(entry);
    } catch (err) {
        console.log(err)
    }
   
    revalidatePath("/portal")
}

export async function updateJobEntry(values: FormData) {
  try {
    const { userId } = await auth();
    const user = await prisma.user.findUnique({
      where: { clerkId: userId || "" },
    });

    if (!user) {
      console.log("User not found");
      return;
    }

    if (!values.id) {
      throw new Error("Job ID is missing.");
    }

    const existingJob = await prisma.job.findUnique({
      where: { id: values.id },
    });

    if (!existingJob) {
      throw new Error(`Job with ID ${values.id} not found.`);
    }

    const updatedEntry = await prisma.job.update({
      where: {
        id: values.id,
      },
      data: {
        jobTitle: values.jobTitle || "",
        companyName: values.companyName || "",
        Salary: values.Salary || "",
        appliedSource: values.appliedSource || "",
        Notes: values.Notes || "",
        status: values.status || "",
      },
    });

    console.log("Updated Entry:", updatedEntry);
    revalidatePath("/portal");
    return updatedEntry;
  } catch (error) {
    console.error("Update failed:", error);
    throw error;
  }
  
}

export async function deleteJob(id:string) {
  await prisma.job.delete({
    where: {
      id:id
    }
  })
  revalidatePath("/portal")
}