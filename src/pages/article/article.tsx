"use client"

const articles: Array<any> = [
    {
        title: 'Apa itu DNS...',
        path: 'apa-itu-dns',
        image: '',
        shortDescription: 'Lorem ipsum dolor sit amet ipusm doler sit...',
    },
    {
        title: 'Firebase solusi terbaik!',
        path: 'firebase-solusi-terbaik',
        image: '',
        shortDescription: 'Firebase dirancang untuk menjadi mudah digunakan oleh pengembang dengan berbagai tingkat keterampilan.',
    },
    {
        title: 'Kelemahan supabase dalam pengembangan.',
        path: 'kelemahan-supabase',
        image: '',
        shortDescription: 'Supabase adalah platform yang menjanjikan. Namun, seperti halnya dengan setiap teknologi, penting untuk mempertimbangkan baik kelebihan maupun kelemahan sebelum memutuskan',
    }
]

import Link from "next/link"
import Image from "next/image"
import { ArticleSearchBar } from "@/components/patterns/ArticleSearchBar"

import { ArticleCard } from "@/components/patterns/ArticleCard"
import { useState } from "react"

export default function ArticlePage() {

    const [queryResult, setQueryResult] = useState<any>()

  return (
    <>
        <section className='flex justify-center py-12'>
            <h1 className='text-[48px] font-semibold w-[500px] text-center'>Lorem ipsum dolor sit article</h1>
        </section>

        <ArticleSearchBar setQuery={setQueryResult} source={articles}/>

        {/* <p>{queryResult}</p> */}

        <section className='py-16'>
            <div className='flex justify-center gap-6 flex-wrap'>
                {queryResult?.length > 0 ? <>
                    {queryResult?.map((a:any, index:any) => (
                        <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.09] transition-all'>
                            <ArticleCard image={a.image} title={a.title} shortDescription={a.shortDescription}/>
                        </Link>
                    ))}
                </> : <>
                    {articles?.map((a, index) => (
                        <Link key={index} href={`article/${a.path}`} className='shadow-lg bg-white h-[max-content] w-[300px] mt-4 cursor-pointer hover:scale-[1.09] transition-all'>
                            <ArticleCard image={a.image} title={a.title} shortDescription={a.shortDescription}/>
                        </Link>
                    ))}
                </>}
            </div>
            {
                articles.length <= 0 && <h3 className='text-center pt-8 pb-14'>No Post Found!.</h3>
            }
        </section>

    </>
  )
}
