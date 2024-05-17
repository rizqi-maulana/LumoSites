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
                        <div className='bg-[#E78F9A] z-[-100] absolute top-[100px] left-[800px]  w-96 h-80 blur-[80px] rounded-md' />
                        <div className='bg-[#85A6F4] z-[-99] absolute left-[10px] bottom-[630px] w-96 h-80 blur-[80px] rounded-md' />
                        <h1 className="text-5xl font-bold mb-3 uppercase">{data.title}</h1>
                        <p className="mb-14">Transform Your Digital Presence and Drive Engagement with Expertly Crafted, High-Performance Landing Pages from Lumosites.</p>
                        <div className="relative flex items-center justify-center">
                            <Image src={LaptopFrame} width={700} height={700} alt={data.title} className="relative z-[100] hidden lg:block overflow-hidden" />
                            <Image
                                src={data.image}
                                width={600}
                                height={600}
                                alt={data.title}
                                className="rounded-xl absolute h-[350px] w-[550px]"
                            />
                        </div>
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 h-[10px] w-[200px] rounded-full mt-[100px]"/>
                        <article className="mt-[100px] text-sm lg:text-base w-[1000px]">
                            <h2 className="font-bold text-3xl mb-5">WHY MUST?</h2>
                            <p className="bg-gray-100 text-gray-500 p-4 border-blue-500">{data.description}</p>
                        </article>

                        {/* <article className="mt-[100px] text-sm lg:text-base w-[1000px] flex flex-col">
                            <h2 className="font-bold text-3xl mb-5 uppercase">Is this Right for Me?</h2>
                            <p className="text-gray-500 p-4 border-blue-500">{data.description}</p>
                        </article> */}
                    </div>
                )
            }
        </div>
    )
}