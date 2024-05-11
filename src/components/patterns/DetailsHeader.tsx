"use client"

import Image from "next/image"
import { DetailsData } from "@/data/DetailsData"
interface HeaderType {
    href: string,
}
export const DetailsHeader = ({ href }: HeaderType) => {

    return (
        <div className="w-full px-3 md:px-32 mt-20 text-[#1B325B]">
            {
                DetailsData.map((data: any) => href === data.href &&
                    <div className="flex flex-col items-center justify-center" key={data.href}>
                        <h1 className="text-5xl font-semibold mb-10">{data.title}</h1>
                        <Image
                            src={data.image}
                            width={700}
                            height={700}
                            alt={data.title}
                            className="rounded-[5px]"
                        />
                        <article className="mt-10"><p>{data.description}</p></article>
                    </div>
                )
            }
        </div>
    )
}