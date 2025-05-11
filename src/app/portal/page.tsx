
import JobCard from "@/components/JobCard";
import prisma from "@/lib/prisma";
import { JobModal } from "@/components/JobModal";
const jobs = [{
  jobTitle: "Software Engineer",
  companyName: "Flipkart",
  appliedSource: "Company's Website",
  status: "Applied",
  id:1
}]
const PortalPage = async () => {
   
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
          <JobModal dialogLabel="+ Add new Job"/>
        </div>
      </header>
          <section id="portal-listings" className="grid grid-cols-3 gap-6">
              {jobs && jobs.map((job) => {
                  return (
                      <JobCard jobTitle={job.jobTitle} companyName={job.companyName} appliedSource={job.appliedSource} notes="" status={job.status} key={job.id}/>
                  );
              })}
        
      </section>
    </main>
  );
}

export default PortalPage