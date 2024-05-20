"use client"

import { ServicesContainer } from "@/components/patterns/ServicesContainer"
import { Translate } from "@/components/patterns/Translator"

import { usePathname } from "next/navigation"

function Services() {
    return (
        <section className="w-full flex items-center justify-center flex-col relative">
            <div className='flex justify-center relative -top-6'>
                <h2 className="bg-[#6C9BFF] text-white shadow-xl border-b-2 border-gray-200 text-center w-max font-semibold px-5 py-3 text-lg md:px-10 md:py-4 md:text-4xl"><Translate to="LAYANAN">SERVICES</Translate></h2>
            </div>
            <ServicesContainer />
        </section>
    )
}

export default Services