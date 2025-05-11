import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";
type CardProps = {
    jobTitle: string,
    companyName: string,
    id:string
}

const ExperienceCard = ({jobTitle,companyName,id}:CardProps) => {
    return (
      <Link href={`/portal/experiences/${id}`}>
        <Card className="rounded-none rounded-tr-4xl rounded-bl-4xl">
          <CardHeader className="text-center">
            <CardTitle>{companyName}</CardTitle>
            <CardDescription>{jobTitle}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    );
};

export default ExperienceCard;
