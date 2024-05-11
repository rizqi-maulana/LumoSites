"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Responsive from "@/assets/images/Responsive.webp";
import { motion } from "framer-motion";

export const AdvantageResponsive = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.advantage-domain');
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
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ delay: 0.2, duration: 0.5 }}

      className="advantage-domain flex justify-between w-max h-max rounded-lg border-2 border-black p-5"
    >
      <div>
        <h2 className="font-semibold mb-2 text-base md:text-lg">Design Reponsive</h2>
        <article className="md:w-[400px] w-full mr-5 text-xs md:text-base">
          <p>
            With responsive design, we ensure that your website seamlessly adapts to various devices, from desktops to smartphones. This not only enhances user experience but also ensures that your business remains professional and accessible anywhere and anytime to visitors.
          </p>
        </article>
      </div>
      <Image src={Responsive} alt="Domain" className="md:w-[100px] md:h-[100px] w-10 h-10" width={100} height={100} />
    </motion.div>
  );
};
