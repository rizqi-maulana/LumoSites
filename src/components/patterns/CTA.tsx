"use client"

import { Buttons } from "../atoms/buttons"
import { Translate } from "./Translator"
import { usePathname } from "next/navigation"


const CTA = () => {
  const pathname = usePathname()
  return (
    <section className="py-28 dark:!bg-slate-800" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", fontFamily: "Poppins" }}>
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-3xl space-y-3 md:mx-auto">
          <h3 className="text-indigo-600 dark:text-[#6C9BFF] font-semibold">
            <Translate to="Layanan Profesional">Professional services</Translate>
          </h3>
          <p className="text-gray-800 dark:text-white text-3xl font-semibold sm:text-4xl">
            <Translate to="Mulai Bangun Website Impian Anda Sekarang!">Start Building Your Dream Website Now!</Translate>
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <Translate to="Kami berkomitmen untuk menyediakan solusi yang efektif dan menarik sesuai kebutuhan Anda. Mari berkolaborasi untuk mewujudkan visi Anda dengan kreativitas dan profesionalisme yang kami tawarkan.">Committed to providing effective and engaging solutions for your needs. Let&lsquo;s collaborate to bring your vision to life with the creativity and professionalism we offer.</Translate>
          </p>
        </div>
        <Buttons href={pathname?.includes('id') ? '/id/services' : '/services'} className='md:m-0 relative z-20 !mt-4 !from-[#6C9BFF] !to-[#6C9BFF]' type='button'><Translate to="Mulailah Perjalanan Anda">Begin Your Journey</Translate></Buttons>
      </div>
    </section>
  )
}

export default CTA