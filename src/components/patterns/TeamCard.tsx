import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface Type {
    image?: any,
    title: string,
    name: string,
  }

export function TeamCard({image, title, name}: Type) {
  return (
    <div className="w-[160px] relative flex-shrink-0 mb-[20px] h-[220px] bg-[#D4D5D6] rounded-md shadow-lg overflow-hidden">
        <h3 className="absolute text-white w-20 text-[10px] left-3 top-3">{title}</h3>
        <div className="absolute h-[2px] w-12 bg-[#5DB1FF] top-12 left-3" />
        <h4 className="absolute bottom-0 bg-white font-semibold px-2 text-[14px] rounded-se-md">{name}</h4>
        <Image src={image} alt="person stand"/>
    </div>
  )
}
