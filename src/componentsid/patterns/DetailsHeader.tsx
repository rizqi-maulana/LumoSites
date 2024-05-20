"use client"

import Image from "next/image"
import { DetailsData } from "@/data/DetailsData"
import LaptopFrame from "@/assets/images/LaptopFrame.webp"
interface HeaderType {
    href: string,
}
export const DetailsHeader = ({ href }: HeaderType) => {

    return (
        <div className="w-full px-3 lg:px-32 mt-20 text-[#1B325B]">
            {
                DetailsData.map((data: any) => href === data.href &&
                    <div className="flex flex-col items-center relative justify-center" key={data.href}>
                        <div className='md:bg-[#E78F9A] bg-[#e78f99a8] z-[-100] absolute md:top-[100px] md:left-[800px] top-[30px] w-96 h-80 blur-[80px] rounded-md' />
                        <div className='md:bg-[#85A6F4] bg-[#85a6f498] z-[-99] absolute md:left-[10px] md:bottom-[630px] bottom-[200px] w-96 h-80 blur-[80px] rounded-md' />
                        <h1 className="md:text-5xl text-4xl font-bold mb-3 uppercase" style={{
                            fontFamily: "Poppins",
                            fontWeight: "bold"
                        }}>{data.title}</h1>
                        <p className="mb-14 text-center">Transform Your Digital Presence and Drive Engagement with Expertly Crafted, High-Performance {data.title} from Lumosites.</p>
                        <div className="relative flex items-center justify-center overflow-hidden">
                            <Image src={LaptopFrame} width={700} height={700} alt={data.title} className="relative z-[100] overflow-hidden" />
                            <Image
                                src={data.image}
                                width={600}
                                height={600}
                                alt={data.title}
                                className="rounded-xl absolute md:h-[350px] md:w-[550px] w-[280px]"
                            />
                        </div>
                        {/* <article className="mt-10 text-sm lg:text-base text-center"><p>{data.description}</p></article> */}
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 md:h-[10px] h-2 md:w-[200px] w-[120px] rounded-full mt-[100px]" />
                        <article className="mt-[100px] text-sm lg:text-base md:w-[1000px]">
                            <h2 className="md:text-3xl md:mb-5 md:ml-0 text-xl ml-3" style={{
                                fontFamily: "Poppins",
                                fontWeight: "bold"
                            }}>WHY MUST?</h2>
                            <p className="md:bg-gray-100 text-gray-500 p-4 border-blue-500">{data.description}</p>
                        </article>
                    </div>
                )
            }
        </div>
    )
}