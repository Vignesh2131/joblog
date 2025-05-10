import type { Metadata } from "next";
import MainNavbar from "../../components/MainNavbar"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Joblog helps you track job applications, get status updates via email, and log interview experiences — all in one place to simplify your job hunt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <main>
        <MainNavbar/>
            {children}
      </main>
  );
}
