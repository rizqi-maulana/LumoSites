"use client"

import Image from "next/image"
import { useEffect, useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import { Links } from "../atoms/Links";
import clsx from "clsx";

interface ServivesType {
  title: string,
  description: string,
  image?: any,
  href?: any,
  animateDelay?: string

}

export const ServicesItem = ({ title, description, image, href, animateDelay }: ServivesType) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.services-items');
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
    <Links href={href}
      className={clsx('services-items md:p-5 p-2 flex justify-between w-[200px] md:w-max md:mb-10 mb-0 border-solid rounded-[5px] hover:shadow-2xl hover:cursor-pointer group relative transition-all duration-300 ease delay-[.2s] animate__animated animated__fast', { 'animate__zoomIn': isVisible })} style={{ animationDelay: `${animateDelay}s` }}>
      <div>
        <div className="flex items-center group-hover:md:opacity-0 transition-all duration-300 ease">
          <Image src={image} width={100} height={100} alt={title} className="md:w-[100px] md:h-[100px] w-10 h-10" />
          <div className="md:ml-5 ml-2">
            <h3 className="md:text-xl text-sm font-semibold">{title}</h3>
            <p className="text-sm md:text-base w-[450px] hidden md:block">{description}</p>
          </div>
        </div>
        <div className="md:opacity-0 opacity-95 h-full w-[90%] flex flex-col justify-center group-hover:opacity-95 absolute top-0 transition-all ease">
          <p className="text-sm md:text-base w-full opacity-1 hidden md:block mb-5">{description}</p>
          <RxExternalLink className="md:w-5 md:h-5 w-3 h-3 text-[#6C9BFF]" />
        </div>
      </div>
    </Links>
  )
}