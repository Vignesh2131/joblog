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
    <nav className="flex justify-between items-center p-4 mx-auto border-b-2 backdrop-blur-3xl opacity-75 bg-white sticky top-0">
      <div>
        <h1 className="cursor-pointer font-semibold text-lg">Joblog</h1>
      </div>
      <div className={`md:static bg-white px-4 py-2
            md:px-0 md:py-0 md:bg-transparent md:min-h-fit absolute min-h-[15vh] left-0 md:inline ${active?"top-[100%]":"hidden"} md:w-auto w-full flex items-center`}>
        <ul className="flex md:flex-row flex-col justify-evenly md:items-center gap-8">
          <li className="hover:text-black">
            <Link href="#home">Home</Link>
          </li>
          <li className="hover:text-black">
            <Link href="#features">Features</Link>
          </li>
          <li className="hover:text-black">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <SignedOut>
          <SignInButton>
            <Button className="bg-[#2E416B] font-light">Sign in</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <Button><Link href="/portal">Portal</Link></Button>
        </SignedIn>
              {active?<CircleXIcon className="md:hidden" onClick={()=>setActive(false)}/>:<Menu className="md:hidden" onClick={()=>setActive(true)}/>}
        <UserButton />
        <ThemeToggler/>
      </div>
    </nav>
  );
}

export default Navbar