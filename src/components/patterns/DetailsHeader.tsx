"use client"

import Image from "next/image"
import { DetailsData } from "@/data/DetailsData"
import LaptopFrame from "@/assets/images/LaptopFrame.webp"

import { usePathname } from "next/navigation"
import { Translate } from "./Translator"

interface HeaderType {
    href: string,
}
export const DetailsHeader = ({ href }: HeaderType) => {
    const pathname = usePathname()

    return (
        <div className="w-full px-3 lg:px-32 mt-20 text-[#1B325B] dark:text-white overflow-hidden">
            {
                DetailsData.map((data: any) => href === data.href &&
                    <div className="flex flex-col items-center justify-center" key={data.href}>
                        <h1 className="md:text-5xl text-4xl font-bold mb-3 uppercase" style={{
                            fontFamily: "Poppins",
                            fontWeight: "bold"
                        }}>{data.title}</h1>
                        <p className="mb-14 text-center">{pathname?.includes('id') ? <>Ubah Kehadiran Digital Anda dan Dorong Keterlibatan dengan {data.title} yang Dibuat Secara Ahli dan Berkinerja Tinggi dari Lumosites.</> : <>Transform Your Digital Presence and Drive Engagement with Expertly Crafted, High-Performance {data.title} from Lumosites.</>}</p>
                        <div className="relative z-[10]">
                            {/* <Image src={LaptopFrame} width={700} height={700} alt={data.title} className="relative z-[100] overflow-hidden" /> */}
                            <Image
                                src={data.image}
                                width={600}
                                height={600}
                                alt={data.title}
                                className="rounded-xl border border-gray-400 lg:h-[350px] shadow-2xl lg:w-[550px] w-[310px] h-[220px]"
                            />
                        </div>
                        <div className="absolute">
                            <div className='md:bg-[#E78F9A] bg-[#e78f9971] relative lg:right-[200px] dark:bg-[#0F334F] md:w-96 w-full h-80 blur-[80px] rounded-md' />
                            <div className='md:bg-[#85A6F4] bg-[#85a6f482] absolute lg:left-[200px] top-0 dark:bg-[#0F334F] md:w-96 w-full h-80 blur-[80px] rounded-md' />
                        </div>
                        {/* <article className="mt-10 text-sm lg:text-base text-center"><p>{data.description}</p></article> */}
                        <div className="bg-gradient-to-r from-gray-400 to-gray-500 md:h-[10px] h-2 md:w-[200px] w-[120px] rounded-full mt-[100px] relative z-[10]" />
                        <article className="mt-[100px] text-sm lg:text-base lg:w-[1000px]">
                            <h2 className="md:text-3xl md:mb-5 md:ml-0 text-xl ml-3" style={{
                                fontFamily: "Poppins",
                                fontWeight: "bold"
                            }}><Translate to="KENAPA HARUS?">WHY MUST?</Translate></h2>
                            <p className="md:bg-gray-100 dark:bg-[#273049] text-gray-500 dark:text-white p-4 border-blue-500">{pathname?.includes('id') ? data.description_id : data.description}</p>
                        </article>
                    </div>
                )
            }
        </div>
    )
}