import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import ExperienceCard from "@/components/ExperienceCard";
import prisma from "@/lib/prisma";
const ExperiencesPage = async () => {
  const { userId } = await auth();
  const userExperiences = await prisma.user.findUnique({
    where: {
      clerkId: userId || "",
    }, select: {
      Experiences: true
    }
  });
  return (
    <main className="px-12 py-8">
      <header
        className="flex items-center justify-between mb-6"
        id="portal-header"
      >
        <div className="">
          <h2 className="text-3xl font-bold">
            Your Stories, <span className="text-[#008335]">Your Growth</span>
          </h2>
          <p>Past interviews, all in one place</p>
        </div>
        <div>
          <Button>
            <Link href="/portal/addExperience">+ Add new experience</Link>
          </Button>
        </div>
      </header>
      <section className="grid grid-cols-2  gap-6">
        {userExperiences?.Experiences?.map((experience) => (
          <ExperienceCard
            key={experience.id}
            id={experience.id}
            companyName={experience.companyName}
            jobTitle={experience.jobTitle}
          />
        ))}
      </section>
    </main>
  );
}

export default ExperiencesPage