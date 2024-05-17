import { DetailsHeader } from "@/components/patterns/DetailsHeader"
import { Portofolio } from "@/components/patterns/Portofolio"
import FAQ from "@/components/organism/faq/faq"
import CTA from "@/components/patterns/CTA"
import { testimonials } from "@/data/TestimonalData"
import PlanContainer from "@/components/patterns/PlanContainer"
import dummyImge from '@/assets/images/landing2.webp'
import dummyImge2 from '@/assets/images/landing1.webp'

import Image from "next/image"

interface DetailsPageType {
  params: string
}

const DetailsPage = ({ params }: DetailsPageType) => {

  return (
    <>
      <section className="mb-[100px]">
        <DetailsHeader href={params} />
      </section>

      <section className="columns-2 w-[1200px] pl-10">
        <Image src={dummyImge} width={450} height={450} className="shadow-2xl" alt="dummyImage"></Image>
        <Image src={dummyImge2} width={450} height={450} className="shadow-2xl" alt="dummyImage"></Image>
      </section>

      {/* <section className="flex flex-col items-center">
        <h4 className="mb-5 font-semibold text-[#000000]/50">Several Websites that we Work on.</h4>
        <Portofolio items={testimonials} direction="right" speed="slow" />
        <Portofolio items={testimonials} direction="left" speed="slow" />
      </section> */}

      <section className="flex items-center justify-center flex-col mt-52 mb-20 py-10">
        <div className='flex justify-center relative -top-6'>
            <h2 className="bg-[#6C9BFF] text-white shadow-xl border-b-2 border-gray-200 text-center w-max font-semibold px-5 py-3 text-lg md:px-10 md:py-4 md:text-4xl">COST ESTIMATION</h2>
        </div>
        <PlanContainer href={params} />
      </section>

      <FAQ href={params} />

      <CTA />
    </>
  )
}

export default DetailsPage