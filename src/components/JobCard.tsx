"use client"
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { CircleX, PenLine } from "lucide-react";
import { deleteJob } from "@/actions/jobActions";
import { JobModal } from "./JobModal";
import { jobCardProps as CardProps } from "@/lib/types";
const JobCard = ({ jobTitle, companyName, appliedSource, status, notes, id,salary }: CardProps) => {
  async function onSubmit(id:string) {
    deleteJob(id)
  }

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle>{jobTitle}</CardTitle>
          <CardDescription>{companyName}</CardDescription>
          <CardDescription>{appliedSource}</CardDescription>
        </div>
        <div>
          <CardDescription>
            <Badge>
              {status}
              <PenLine />
            </Badge>
          </CardDescription>
        </div>
      </CardHeader>
      {(notes !== "" || salary !== "") && (
        <CardContent className="flex items-center justify-between">
          {notes !== "" && (
            <p className="text-sm font-semibold">
              Notes : <span className="font-normal">{notes}</span>
            </p>
          )}
        </CardContent>
      )}
      <CardFooter className="w-full flex justify-between items-center">
        <JobModal
          dialogLabel={"Edit Details"}
          jobTitle={jobTitle}
          companyName={companyName}
          appliedSource={appliedSource}
          status={status}
          Notes={notes}
          id={id}
          postType="post"
        />
        <Button onClick={() => onSubmit(id)}>
          <CircleX />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default JobCard