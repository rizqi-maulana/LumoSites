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
        <PlanContainer href={params} />
      </section>

      <section className="flex flex-col items-center mt-[100px] mb-[200px]">
        <h4 className="mb-[100px] font-semibold text-[#000000]/50">several Websites that we Work on.</h4>
        <Portofolio items={testimonials} direction="right" speed="slow" />
        <Portofolio items={testimonials} direction="left" speed="slow" />
      </section>

      <FAQ href={params} />

      <CTA />
    </>
  )
}

export default DetailsPage