import { Links } from "@/components/atoms/Links"
import { CardBody, CardContainer, CardItem } from "@/components/patterns/3dDetailcard"
import { DetailsData } from "@/data/DetailsData"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Elevate your online presence with our professional website development services. We specialize in creating custom websites tailored to your unique needs, ensuring a seamless user experience and visually appealing design. Our team of expert developers and designers works closely with you to build responsive, SEO-friendly websites that drive traffic and boost your business. From e-commerce solutions to corporate websites and personal blogs, we offer comprehensive services to meet all your web development needs. Trust us to turn your vision into a stunning, functional website that stands out in the digital landscape.",
  keywords: "Lumosites services, website development, custom web design, responsive websites, SEO services, e-commerce solutions, web maintenance, website redesign, digital marketing services, UX/UI design"
}

export default function Details() {
  return (
    <section className="w-full flex flex-wrap justify-center gap-10 my-20">
      <div className="absolute">
        <div className='md:bg-[#E78F9A] bg-[#e78f9971] dark:bg-[#0F334F] z-[10] relative md:-top-[50px] md:w-96 w-80 h-80 blur-[80px] rounded-md' />
        <div className='md:bg-[#85A6F4] bg-[#85a6f482] dark:bg-[#39284A] z-[10] absolute -left-[200px] md:bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
      </div>
      {
        DetailsData.map((data: any, index) => <Links key={index} href={`/services/${data.href}`} >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-white/[0.2] border-black/[0.1] md:w-auto w-[90%] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl text-[#1B325B] dark:text-white"
              >
                <h1 style={{
                  fontFamily: "Poppins",
                  fontWeight: "bold"
                }}>{data.title}</h1>
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-black text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {data.description.slice(0, 200) + "..."}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={data.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center md:mt-20 mt-10">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Check Out →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </Links>)
      }
    </section>
  )
}