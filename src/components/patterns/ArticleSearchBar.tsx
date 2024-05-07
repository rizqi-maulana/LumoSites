'use client'

import Image from 'next/image'
import { useState } from 'react'

// interface ArticleCardType {
//     image?: any,
//     title: string,
//     shortDescription: string,
//   }

export function ArticleSearchBar({setQuery, source}: {setQuery: any, source: Array<any>}) {

    const [sessQuery, setSessQuery] = useState<string>()

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const result:Array<any> = source.filter(item => item.title.toLowerCase().includes(sessQuery?.toLowerCase())) 
        setQuery(result)
    }

  return (
    <section className='flex justify-center'>
        <form onSubmit={handleSubmit} className='w-full flex justify-center'>
            <input onChange={({ target }) => setSessQuery(target.value)} type="text" className='border border-black outline-none w-[85%] md:w-[800px] py-4 px-6 rounded-2xl' placeholder='Search article...'/>
        </form>
    </section>
  )
}
