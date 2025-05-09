"use client"
import { SignedOut, SignInButton } from "@clerk/nextjs"
import { Menu,CircleXIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
const Navbar = () => {
    const [active, setActive] = useState(false);
  return (
    <nav className="flex justify-between items-center p-4 mx-auto border-b-2 backdrop-blur-3xl opacity-50 bg-white">
      <div>
        <h1 className="cursor-pointer font-semibold text-lg">Joblog</h1>
      </div>
          <div className={`md:static md:min-h-fit absolute min-h-[15vh] left-0 top-[${active?"9%":"-100%"}] md:w-auto w-full flex items-center`}>
        <ul className="flex md:flex-row flex-col justify-evenly md:items-center gap-8">
          <li className="hover:text-black">Home</li>
          <li className="hover:text-black">Features</li>
          <li className="hover:text-black">Contact</li>
        </ul>
      </div>
      <div className="flex items-center gap-6">
        <SignedOut>
          <SignInButton>
            <Button className="bg-[#2E416B] font-light">Sign in</Button>
          </SignInButton>
              </SignedOut>
              {active?<CircleXIcon className="md:hidden" onClick={()=>setActive(false)}/>:<Menu className="md:hidden" onClick={()=>setActive(true)}/>}
      </div>
    </nav>
  );
}

export default Navbar