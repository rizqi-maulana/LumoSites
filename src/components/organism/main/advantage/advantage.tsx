"use client"
import AdvantageContainer from "@/components/patterns/AdvantageContainer";

import { usePathname } from "next/navigation";

import { Translate } from "@/components/patterns/Translator";

const Advantage = () => {
  return (
    <section className="w-full bg-[#E9F1FB] dark:bg-slate-950 dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="bg-gradient-to-b from-[#eff9fb] dark:from-slate-900 absolute to-transparent w-full -bottom-70 h-[200px]" />
      <div className=" px-2 md:px-32">
        <div className='flex justify-center relative -top-6'>
          <h2 className="bg-[#6C9BFF] text-white shadow-xl border-b-2 border-gray-200 dark:border-none text-center w-max font-semibold px-5 py-3 text-lg md:px-10 md:py-4 md:text-4xl"><Translate to="KEUNGGULAN">ADVANTAGES</Translate></h2>
        </div>
        <AdvantageContainer />
      </div>
    </section>
  )
}

export default Advantage;