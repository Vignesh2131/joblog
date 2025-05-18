import { SignUp } from "@clerk/nextjs"
const Page = () => {
    return ( <div className="relative min-h-screen overflow-hidden bg-white dark:bg-black">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-[#FDE68A]/60 via-[#8B5CF6]/30 to-transparent blur-2xl opacity-70 z-0 pointer-events-none" />
          <div className="h-screen relative z-10 flex justify-center items-center">
            <SignUp />
          </div>
        </div>)
}

export default Page