"use client"

import Image from "next/image"
import SEO from '@/assets/images/SEO.webp'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'

export const AdvantageHightSeo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.advantage-seo');
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
      transition={{ delay: 0.4, duration: 0.5 }}
      className="advantage-seo flex justify-between w-[50%] h-max rounded-lg border-2 border-black p-5">
      <div>
        <h2 className="font-semibold mb-2 text-base md:text-lg">High Level SEO</h2>
        <article className="md:w-[400px] w-full mr-5 text-xs md:text-base"><p>
          With our website creation service, you gain access to high-level SEO capabilities. Our team implements advanced SEO strategies to optimize your website's visibility and ranking on search engines. From keyword research to on-page optimization and backlinking, we ensure that your website is positioned for success in organic search results. This helps drive targeted traffic to your site, increasing your online presence and potential for business growth.</p>
        </article>
      </div>
      <Image src={SEO} alt="SEO" className="md:w-[100px] md:h-[100px] w-10 h-10" width={100} height={100} />
    </motion.div>
  )
}