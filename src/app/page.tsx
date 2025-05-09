import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-[#6A96F7] h-full tracking-tight">
      <Navbar />
      <section
        id="home"
        className="flex flex-col gap-y-3 items-center justify-center h-screen mx-auto w-[90%] md:w-[80%] text-center text-white"
      >
        <div>
          <p className="text-3xl leading-10 font-semibold md:font-normal md:text-5xl md:leading-14">
            Track Your{" "}
            <span className="text-3xl md:text-6xl font-bold md:italic text-[#2E416B]">
              Job Hunt,
            </span>{" "}
            Stay Updated, and Share Your Journey —{" "}
            <span className="font-bold md:italic text-[#2E416B]">
              All in One Place
            </span>
          </p>
        </div>
        <div>
          <p className="text-base md:text-xl font-light">
            Manage job applications, get timely updates, and log interview
            experiences with ease
          </p>
        </div>
        <div>
          <SignInButton>
            <Button className="bg-[#2E416B]">Login to get Started</Button>
          </SignInButton>
        </div>
      </section>
      <section
        id="features"
        className="flex flex-col items-center h-full mx-auto py-3"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E416B]">Features</h2>
          <p className="text-white text-sm md:text-base">
            Why Joblog? Everything You Need to Organize Your Job Hunt
          </p>
        </div>
        <div className="flex flex-col gap-y-10 w-[70%] mx-auto text-white">
          <div className="flex items-center gap-x-4 justify-between bg-[#2E416B] p-8 rounded-xl md:rounded-tr-[5rem]">
            <div className="md:basis-2/3 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">
                Job Application Tracker
              </h3>
              <p>
                Easily log every job you’ve applied to and update the status as
                you progress from Applied to Interviewed to Rejected. Stay
                organized and focused throughout your job hunt.
              </p>
            </div>
            <div className="hidden md:inline md:basis-1/3">
              <Image
                className="rounded-lg"
                src="/ss1.png"
                width={300}
                height={300}
                alt="feature-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-x-4 justify-between bg-[#2E416B] p-8 rounded-xl text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Bi-weekly Email Updates
              </h3>
              <p>
                Receive a summary of your job applications and their statuses
                right in your inbox every two weeks. A simple way to stay
                informed and never lose track.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-4 justify-between bg-[#2E416B] p-8 rounded-xl md:rounded-bl-[5rem]">
            <div className="md:basis-1/3 hidden md:inline">
              <Image
                className="rounded-lg"
                src="/ss2.png"
                width={300}
                height={300}
                alt="feature-2"
              />
            </div>
            <div className="text-center md:basis-2/3 md:text-right">
              <h3 className="text-2xl font-semibold mb-2">
                Interview Experience Logs
              </h3>
              <p>
                Document your interview experiences with each job. Reflect on
                what went well, what to improve, and help yourself prepare
                better for the next opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer id="contact" className="flex flex-col items-center py-6">
        <h3 className="font-semibold text-white">
          Built and maintained by Vignesh
        </h3>
        <h4 className="text-base font-semibold md:text-lg">
          Connect with me in{" "}
          <Link
            className="italic underline"
            href="https://github.com/Vignesh2131"
          >
            Github
          </Link>{" "}
          or{" "}
          <Link
            className="italic underline"
            href="https://x.com/automatedlife21"
          >
            X
          </Link>{" "}
        </h4>
      </footer>
    </main>
  );
}
