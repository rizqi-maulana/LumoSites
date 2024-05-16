"use client"

import Image from "next/image"
import CS from '@/assets/images/customer-service.webp'
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export const AdvantageCS = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.advantage-cs');
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
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="advantage-cs flex justify-between w-max h-max rounded-lg border-2 border-black p-5">
      <div>
        <h2 className="font-semibold mb-2 text-base lg:text-lg">Ready to respond to customer support</h2>
        <article className="lg:w-[400px] w-full mr-5 text-xs lg:text-base"><p>With our website creation service, you not only get quality design but also responsive customer support. Our support team is ready to assist you promptly and efficiently with any questions or issues that may arise. This ensures that you can feel confident knowing that help is always available when you need it, enhancing customer trust and satisfaction.</p>
        </article>
      </div>
      <Image src={CS} alt="Customer Support" className="lg:w-[100px] lg:h-[100px] w-10 h-10" width={100} height={100} />
    </motion.div>
  )
}