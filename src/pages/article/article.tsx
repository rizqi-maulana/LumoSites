"use client"

import { Articles } from "@/data/Articles"

import Link from "next/link"
import { ArticleSearchBar } from "@/components/patterns/ArticleSearchBar"
import { TextGenerateEffect } from "@/components/patterns/GenerateText"
import WordPullUp from "@/components/patterns/word-pull-up"

import { ArticleCard } from "@/components/patterns/ArticleCard"
import { useState } from "react"

import { usePathname } from "next/navigation"

export default function ArticlePage() {

    const pathname = usePathname()

    const [queryResult, setQueryResult] = useState<any>()

    return (
        <>
            <section className='flex justify-center py-12'>
                <WordPullUp className="!text-2xl lg:!text-3xl !font-bold z-10 !text-center w-[90%] lg:w-full" words={pathname?.includes('id') ? "Jelajahi kedalaman wawasan terbaru kami di artikel ini..." : "Explore the depths of our latest insights in this article..."} style={{ fontFamily: "Poppins", fontWeight: "800" }} />
                <div className='absolute mt-24 lg:mt-0'>
                    {/* blur 80px */}
                    <div className=' bg-[#e78f9971] dark:bg-[#0F334F] relative -top-[20px] lg:-top-[50px] lg:w-96 lg:h-80 w-[100px] h-[100px] blur-[40px] lg:blur-[80px] rounded-md' />
                    <div className='bg-[#85a6f482] dark:bg-[#0F334F] absolute lg:-left-[600px] -bottom-[50px] right-[150px] lg:-bottom-[150px] lg:w-96 lg:h-80 w-[100px] h-[100px] blur-[40px] lg:blur-[80px] rounded-md' />
                </div>
            </section>

            <ArticleSearchBar setQuery={setQueryResult} source={Articles} />

            <section className='py-16 relative z-10'>
                <div className='flex justify-center gap-6 flex-wrap'>
                    {queryResult?.length > 0 ? <>
                        {queryResult?.map((a: any, index: any) => (
                            <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-t-lg h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.05] transition-all'>
                                <ArticleCard image={a.image} title={a.title} shortDescription={a.shortDescription} />
                            </Link>
                        ))}
                    </> : <>
                        {Articles?.map((a, index) => (
                            <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white dark:bg-gray-900 dark:text-white rounded-t-lg h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.05] transition-all'>
                                <ArticleCard image={a.image} title={a.title} shortDescription={a.shortDescription} />
                            </Link>
                        ))}
                    </>}
                </div>
                {
                    Articles.length <= 0 && <h3 className='text-center pt-8 pb-14'>No Post Found!.</h3>
                }
            </section>

        </>
    )
}
