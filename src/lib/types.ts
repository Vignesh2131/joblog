export type jobModalProps = {
  dialogLabel: string;
  jobTitle?: string;
  companyName?: string;
  appliedSource?: string;
  status?: string;
  Notes?: string;
  Salary?: string;
  id?: string;
  postType: string;
}

export type jobCardProps = {
        jobTitle: string,
        companyName: string,
        appliedSource: string,
        status: string,
      notes: string,
      salary?:string,
        id:string,
}