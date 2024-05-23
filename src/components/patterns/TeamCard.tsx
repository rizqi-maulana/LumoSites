"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx';
import { Tooltip } from 'react-tippys';

interface Type {
  image?: any,
  title: string,
  name: string,
  animateDelay?: string
}

export function TeamCard({ image, title, name, animateDelay }: Type) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.team-card');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };
    handleScroll()
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Tooltip
      trigger='mouseenter'
      title={name}
      theme='light'
      position='top-start'
      animation='perspective'
    >
      <div className={clsx('team-card w-[140px] md:w-[160px] relative flex flex-shrink-0 mb-[20px] h-[220px] hover:cursor-pointer bg-[#D4D5D6] rounded-md shadow-lg overflow-hidden animate__animated animated__fast', {
        'animate__fadeInUp': isVisible
      })} style={{ animationDelay: `${animateDelay}s` }}>
        <Image src={image} alt={title} className="w-full h-full object-cover" width={160} height={220} />
        {/* <div className='absolute bottom-0 py-2 pr-5 pl-3 rounded-tr-xl bg-white w-max'>
        <h3 className='text-sm font-semibold'>{name}</h3>
      </div> */}
        <div className='w-[70%] h-max absolute bottom-3 ml-3'>
          <h3 className='font-semibold text-sm text-white'>{title}</h3>
          <div className='w-[60%] rounded-full bg-[#6C9BFF] h-1 mt-1' />
        </div>
      </div>
    </Tooltip>
  )
}