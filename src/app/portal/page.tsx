import { auth } from "@clerk/nextjs/server";
import JobCard from "@/components/JobCard";
import prisma from "@/lib/prisma";
import { JobModal } from "@/components/JobModal";
const PortalPage = async () => {
  const { userId } = await auth();
  const userJobs = await prisma.user.findUnique({
    where: {
      clerkId: userId || "",
    },
    select: {
      Jobs: true,
    },
  });
  return (
    <main className="px-12 py-8">
      <header
        className="flex items-center justify-between mb-6"
        id="portal-header"
      >
        <div className="">
          <h2 className="text-3xl font-bold">
            Your <span className="text-[#6A96F7]">Job Applications</span>
          </h2>
          <p>Statuses at a glance</p>
        </div>
        <div>
          <JobModal dialogLabel="+ Add new Job" postType="add"/>
        </div>
      </header>
          <section id="portal-listings" className="grid grid-cols-3 gap-6">
              {userJobs?.Jobs && userJobs.Jobs.map((job) => {
                  return (
                      <JobCard jobTitle={job.jobTitle} salary={job.Salary||""} id={job.id} companyName={job.companyName} appliedSource={job.appliedSource} notes={job.Notes||""} status={job.status} key={job.id}/>
                  );
              })}
        
      </section>
    </main>
  );
}

export default PortalPage