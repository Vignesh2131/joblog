import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"]
})


export const metadata: Metadata = {
  title: "Joblog",
  description:
    "Joblog helps you track job applications, get status updates via email, and log interview experiences — all in one place to simplify your job hunt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
