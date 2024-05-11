import React from 'react'
import Image from 'next/image'

interface Type {
  image?: any,
  title: string,
  name: string,
}

export function TeamCard({ image, title, name }: Type) {
  return (
    <div className="w-[160px] relative flex flex-shrink-0 mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg overflow-hidden">
      <div className='w-[70%] h-max absolute top-3 ml-3'>
        <h3 className='font-semibold text-sm text-white'>{title}</h3>
        <div className='w-[60%] rounded-full bg-[#6C9BFF] h-1 mt-1' />
      </div>
      <Image src={image} alt={title} className="w-full h-full object-cover" width={160} height={220} />
      <div className='absolute bottom-0 py-2 pr-5 pl-3 rounded-tr-xl bg-white w-max'>
        <h3 className='text-sm font-semibold'>{name}</h3>
      </div>
    </div>
  )
}