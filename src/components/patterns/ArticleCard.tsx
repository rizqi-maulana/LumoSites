import React from 'react'
import Image from 'next/image'
import { Tooltip } from 'react-tippys'

interface ArticleCardType {
  image?: any,
  title: string,
  shortDescription: string,
  category: string
}

export function ArticleCard({ image, title, shortDescription, category }: ArticleCardType) {
  return (
    <Tooltip
      title={title}
      position='top'
      trigger='mouseenter'
      theme='dark'
    >
      <Image src={image} alt={title} width={700} height={350} className='object-cover rounded-t-lg' sizes='100vw' />
      <div className='p-3'>
        <div className='flex items-center justify-between'>
          <h3 className='text-[#7DA8FF] text-base mb-2 font-semibold'>{title.slice(0, 20)} {title.length >= 20 ? '...' : ''}</h3>
          <span className='text-xs border-1 border-white px-2 rounded-lg'>{category}</span>
        </div>
        <p className='text-sm'>{shortDescription.slice(0, 100)}...</p>
      </div>
    </Tooltip>
  )
}
