import Image from "next/image"
import { Buttons } from "../atoms/buttons"
import team from '@/assets/images/jung.jpg'
import { Translate } from "./Translator"
import { SparklesCore } from "../atoms/sparkles"


const CTA = () => {
  // return (
  //   <div className="bg-[#1B2538] dark:bg-slate-950 w-full lg:h-[700px] h-max lg:flex block justify-evenly items-center py-10 lg:px-0 px-10 relative">
  //     <SparklesCore
  //       background="transparent"
  //       minSize={0.4}
  //       maxSize={1}
  //       particleDensity={100}
  //       className="w-full h-full absolute left-0 top-0"
  //       particleColor="#FFFFFF"
  //     />
  //     <div>
  //       <div className='text-3xl lg:text-6xl font-semibold lg:w-[700px] w-full relative z-[100]'>

  //         <div className="text-3xl lg:text-5xl">
  //           <h2 className="text-white " style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to="Mulailah Membangun">Start Building Your</Translate></h2>
  //           <h2 className="text-[#6C9BFF] mt-4" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to="Situs Impian Sekarang!">Dream Website Now!</Translate></h2>
  //         </div>
  //       </div>
  //       <p className="mt-10 mb-10 lg:w-[600px] w-full text-sm lg:text-base text-white"><Translate to="Berkomitmen untuk memberikan solusi yang efektif dan menarik untuk kebutuhan Anda. Mari berkolaborasi untuk mewujudkan visi Anda dengan kreativitas dan profesionalisme yang kami tawarkan.">Committed to providing effective and engaging solutions for your needs. Let&apos;s collaborate to bring your vision to life with the creativity and professionalism we offer.</Translate></p>
  //       <Buttons type="button" className="!from-[#6C9BFF] !to-[#6C9BFF] relative"><Translate to="Begin Your Journey">Begin Your Journey</Translate></Buttons>
  //     </div>
  //     {/* <Image src={team} width={200} height={200} alt="team" className="lg:block hidden relative  z-[100]" /> */}
  //     <div className="w-[200px] h-[200px]" />
  //   </div>
  // )
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
        <Buttons className='md:m-0 relative z-20 !mt-4 !from-[#6C9BFF] !to-[#6C9BFF]' type='button'><Translate to="Mulailah Perjalanan Anda">Begin Your Journey</Translate></Buttons>

        {/* <div className="mt-4">
          <a href="javascript:void(0)" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
            Get started
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default CTA