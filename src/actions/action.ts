"use server"
import prisma from "@/lib/prisma"
export async function createJobEntry() {
    await prisma.job.create({
        data: {
            jobTitle: "",
            companyName: "",
            appliedSource: "",
            status: "",
            Notes: "",
            Salary: "",
            userId:"",
        }
    })
}