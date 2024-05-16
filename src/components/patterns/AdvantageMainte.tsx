"use client"

import Image from "next/image"
import Maintenance from '@/assets/images/Maintenance.webp'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export const AdvantageMainte = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.advantage-maintenance');
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="advantage-maintenance flex justify-between w-max h-max rounded-lg border-2 border-black p-5">
      <div>
        <h2 className="font-semibold mb-2 text-base lg:text-lg">Maintenance costs for 2 months</h2>
        <article className="lg:w-[400px] w-full mr-5 text-xs lg:text-base"><p>
          During the initial two months following purchase, our website creation service includes complimentary maintenance. This ensures that any technical issues or updates are promptly addressed, guaranteeing optimal performance and functionality for your website. Additionally, our team is available to provide support and assistance as needed during this period, ensuring a smooth transition and positive experience for you.</p>
        </article>
      </div>
      <Image src={Maintenance} alt="Maintenance" className="lg:w-[100px] lg:h-[100px] w-10 h-10" width={100} height={100} />
    </motion.div>
  )
}