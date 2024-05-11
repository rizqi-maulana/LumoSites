import React from 'react'
import Image from 'next/image'

interface ArticleCardType {
    image?: any,
    title: string,
    shortDescription: string,
  }

export function ArticleCard({image, title, shortDescription}: ArticleCardType) {
  return (
    <>
        <div className='h-[180px] bg-gray-600 border border-black'>
            <Image src={image} alt={title} width={100} height={100}/>
        </div>
        <div className='p-3'>
            <h3 className='text-[#7DA8FF] font-semibold'>{title}</h3>
            <p>{shortDescription}</p>    
        </div>
    </>
  )
}
