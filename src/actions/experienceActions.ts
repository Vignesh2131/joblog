"use server"
import prisma from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
type FormValues = {
    jobTitle: string,
    companyName: string,
    interviewStage: string,
    outcome: string,
    dateOfInterview: string,
    summary: string,
    takeaways: string,
}
export default async function addExperienceAction(values: FormValues) {
    try {
        const { userId } = await auth();
        const userDB = await prisma.user.findUnique({
          where: {
            clerkId: userId || "",
          },
        });
        if (!userDB) return "Error while fetching data.";

        await prisma.experience.create({
          data: {
            jobTitle: values.jobTitle || "",
            companyName: values.companyName || "",
            interviewStage: values.interviewStage || "",
            outcome: values.outcome || "",
            dateOfInterview: values.dateOfInterview || new Date(),
            summary: values.summary || "",
            takeaways: values.takeaways || "",
            userId: userDB.id || "",
          },
        });

    } catch (error) {
        console.log(error)
    }
    revalidatePath("/portal/experiences")
    redirect(`/portal/experiences`)
}

