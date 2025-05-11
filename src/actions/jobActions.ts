"use server"
import prisma from "@/lib/prisma"
import { auth, currentUser } from "@clerk/nextjs/server"
type FormData = {
    jobTitle: string,
    companyName: string,
    appliedSource: string,
    status: string,
    Notes: string,
    Salary: string,
}
export default async function createJobEntry() {
    const { userId } = await auth();
    console.log(userId)
}