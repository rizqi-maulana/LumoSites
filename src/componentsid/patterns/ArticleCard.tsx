import React from 'react'
import Image from 'next/image'

interface ArticleCardType {
  image?: any,
  title: string,
  shortDescription: string,
}

export function ArticleCard({ image, title, shortDescription }: ArticleCardType) {
  return (
    <>
      <Image src={image} alt={title} width={700} height={700} className='object-cover rounded-t-lg' />
      <div className='p-3'>
        <h3 className='text-[#7DA8FF] text-base mb-2 font-semibold'>{title}</h3>
        <p className='text-sm'>{shortDescription}</p>
      </div>
    </>
  )
}
