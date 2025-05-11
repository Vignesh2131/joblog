"use client";
import { UserButton,SignedIn } from "@clerk/nextjs";
// import { Menu, CircleXIcon } from "lucide-react";
// import { Button } from "./ui/button";
// import { useState } from "react";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
const Navbar = () => {
//   const [active, setActive] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 mx-auto border-b-2 backdrop-blur-3xl sticky top-0">
      <div>
        <h1 className="cursor-pointer font-semibold text-lg"><Link href="/portal">Joblog</Link></h1>
      </div>
      <div className="flex items-center gap-6">
        <div>
          <ul className="flex items-center gap-x-7">
            <li><Link href="/portal/experiences">Experiences</Link></li>
            <li><ThemeToggler/></li>
          </ul>
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
