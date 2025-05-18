import prisma from "@/lib/prisma"
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
const ExperienceInfo = async ({ params }: { params: Promise<{ experience: string }> }) => {
    const { experience } = await params
    const experienceDetails = await prisma.experience.findFirst({
        where: {
            id:experience||""
        }
    })
    const formatted = experienceDetails?.dateOfInterview 
        ? format(new Date(experienceDetails.dateOfInterview), "dd/MM/yy") 
        : "N/A";
    console.log(experienceDetails)
  return (
    <main className="px-6 md:px-12 py-8 space-y-6">
      <div id="info" className="flex md:flex-row flex-col justify-between items-center">
        <div>
          <h2 className="text-[#6A96F7] text-xl md:text-3xl font-semibold">
            Interview Experience{" "}
            <span className="text-white">
              at {experienceDetails?.companyName}
            </span>
          </h2>
          <p>
            Role : {experienceDetails?.jobTitle} | Interview Stage :{" "}
            {experienceDetails?.interviewStage} | Date : {formatted}
          </p>
        </div>
        <div>
          <Badge className="px-4 py-2">{experienceDetails?.outcome}</Badge>
        </div>
          </div>
          <div id="summary">
              <h3 className="font-semibold text-lg">Experience Summary</h3>
              <p>{experienceDetails?.summary}</p>
          </div>
          {experienceDetails?.takeaways ?? (
               <div id="outcomes">
               <h3 className="font-semibold text-lg">Tips / Takeaway</h3>
               <p>{experienceDetails?.takeaways}</p>
           </div>
          )}
         
    </main>
  );
}

export default ExperienceInfo