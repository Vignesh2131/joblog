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
    <main className="md:px-6 px-12 py-8">
      <header
        className="flex flex-col md:flex-row items-center justify-between mb-6"
        id="portal-header"
      >
        <div className="flex flex-col items-center md:items-start mb-2">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
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
      <section className="md:grid md:grid-cols-2  space-x-6 space-y-6">
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