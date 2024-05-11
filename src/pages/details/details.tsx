import { DetailsHeader } from "@/components/patterns/DetailsHeader"
import { DetailsCheck } from "@/components/patterns/DetailsCheck"
import { Buttons } from "@/components/atoms/buttons"
import { Portofolio } from "@/components/patterns/Portofolio"
import FAQ from "@/components/organism/main/faq/faq"
import CTA from "@/components/patterns/CTA"
import { testimonials } from "@/data/TestimonalData"

interface DetailsPageType {
  params: string
}

const DetailsPage = ({ params }: DetailsPageType) => {

  return (
    <>
      <section>
        <DetailsHeader href={params} />
      </section>

      <section className="flex items-center justify-center flex-col mt-52 mb-20 bg-white py-10">
        <div className='text-2xl md:text-4xl font-semibold mb-10 md:mb-28 p-2 md:p-5 bg-[#6C9BFF] w-max'>
          <h1 className="text-white">Advantage You Get </h1>
        </div>
        <DetailsCheck />
      </section>

      <div className="flex items-center justify-center">
        <Buttons type="button" className="mb-20">Order Now</Buttons>
      </div>

      <section className="flex flex-col items-center">
        <h4 className="mb-5 font-semibold text-[#000000]/50">Several Websites that we Work on.</h4>
        <Portofolio items={testimonials} direction="right" speed="slow" />
        <Portofolio items={testimonials} direction="left" speed="slow" />
      </section>

      <FAQ href={params} />

      <CTA />
    </>
  )
}

export default DetailsPage