import { DetailsHeader } from "@/components/patterns/DetailsHeader"
import { Portofolio } from "@/components/patterns/Portofolio"
import FAQ from "@/components/organism/faq/faq"
import CTA from "@/components/patterns/CTA"
import { testimonials } from "@/data/TestimonalData"
import PlanContainer from "@/components/patterns/PlanContainer"

interface DetailsPageType {
  params: string
}

const DetailsPage = ({ params }: DetailsPageType) => {

  return (
    <>
      <section>
        <DetailsHeader href={params} />
      </section>

      <section className="flex items-center justify-center flex-col mt-52 mb-20 py-10">
        <div className='text-2xl lg:text-4xl font-semibold mb-10 lg:mb-28 p-2 lg:p-5 bg-[#6C9BFF] w-max'>
          <h1 className="text-white">Cost Estimation</h1>
        </div>
        <PlanContainer href={params} />
      </section>

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