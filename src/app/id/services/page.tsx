import { Links } from "@/components/atoms/Links"
import { CardBody, CardContainer, CardItem } from "@/components/patterns/3dDetailcard"
import { DetailsData } from "@/data/DetailsData"
import Image from "next/image"
import { Translate } from "@/components/patterns/Translator"

export default function Details() {
  return (
    <section className="w-full flex flex-wrap justify-center gap-10 my-20">
      <div className="absolute">
        <div className='md:bg-[#E78F9A] bg-[#e78f9971] z-[-100] relative md:top-[-50px] w-96 h-80 blur-[80px] rounded-md' />
        <div className='md:bg-[#85A6F4] bg-[#85a6f482] z-[-100] absolute left-[-200px] md:bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
      </div>
      {
        DetailsData.map((data: any) => <Links href={`details/${data.href}`} >
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] md:w-auto w-[90%] h-auto rounded-xl p-6 border  ">
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
                {data.description_id}
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
                  <Translate to="Cek Sekarang">Check Out</Translate> →
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </Links>)
      }
    </section>
  )
}