"use client"
import { SignedOut, SignInButton, UserButton, SignedIn } from "@clerk/nextjs"
import { Menu,CircleXIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
const Navbar = () => {
    const [active, setActive] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 mx-auto border-b-2 backdrop-blur-3xl">
      <div>
        <h1 className="cursor-pointer font-semibold text-lg">Joblog</h1>
      </div>
      <div
        className={`md:static px-4 py-2  backdrop-blur-3xl
            md:px-0 md:py-0 md:bg-transparent md:min-h-fit absolute min-h-[15vh] left-0 md:inline ${
              active
                ? "top-[100%] rounded-xl shadow-md border-2"
                : "hidden"
            } md:w-auto w-full flex items-center`}
      >
        <ul className="flex md:flex-row flex-col justify-center md:justify-evenly mx-auto items-center gap-6 backdrop-blur-2xl">
          <li className="hover:text-gray-500 dark:hover:text-gray-700">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-gray-500  dark:hover:text-gray-700">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:text-gray-500  dark:hover:text-gray-700">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <SignedOut>
          <SignInButton>
            <Button className="bg-[#2E416B] font-light dark:text-white">
              Sign in
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Button>
            <Link href="/portal">Portal</Link>
          </Button>
          <UserButton />
        </SignedIn>

        <ThemeToggler />
        {active ? (
          <CircleXIcon className="md:hidden" onClick={() => setActive(false)} />
        ) : (
          <Menu className="md:hidden" onClick={() => setActive(true)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar