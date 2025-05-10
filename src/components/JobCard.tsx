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
type CardProps = {
    jobTitle: string,
    companyName: string,
    appliedSource: string,
    status: string,
    notes:string,
}

const JobCard = ({jobTitle,companyName,appliedSource,status,notes}:CardProps) => {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <div>
          <CardTitle>{jobTitle}</CardTitle>
          <CardDescription>{companyName}</CardDescription>
                  <CardDescription>{appliedSource}</CardDescription>
        </div>
        <div>
                  <CardDescription><Badge>{status}</Badge></CardDescription>
        </div>
      </CardHeader>
      <CardFooter className="w-full">
        <Button>+ Add notes</Button>
      </CardFooter>
    </Card>
  );
}

export default JobCard