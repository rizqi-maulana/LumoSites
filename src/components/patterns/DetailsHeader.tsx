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
                    <div className="flex flex-col items-center justify-center" key={data.href}>
                        <h1 className="text-5xl font-semibold mb-10 w-[800px] leading-[60px] text-center">Lorem ipsum dolor sit amet {data.title}</h1>
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
<<<<<<< HEAD
                        <article className="mt-[80px] w-[1100px] text-center "><p>{data.description}</p></article>
=======
                        <article className="mt-10 text-sm lg:text-base text-center"><p>{data.description}</p></article>
>>>>>>> 1aaa9877c9c749b151d13f3d832ab79f3249025c
                    </div>
                )
            }
        </div>
    )
}