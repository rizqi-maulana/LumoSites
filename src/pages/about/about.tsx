"use client"

import { AboutHeader } from "@/components/patterns/AboutHeader"
import { useEffect, useState } from "react"
import { MediaData } from "@/data/SocialMedia"
import { SocialMedia } from "@/components/patterns/SocialMedia"
import { TeamAndMission } from "@/components/organism/about/TeamAndMission"
import { usePathname } from 'next/navigation'
import { VisionAndActivity } from "@/components/organism/about/VisionAndActivity"


const AboutPage = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.visi');
            const element2 = document.querySelector('.misi');
            if (element) {
                const elementTop = element.getBoundingClientRect().top;
                const elementBottom = element.getBoundingClientRect().bottom;
                if (elementTop < window.innerHeight && elementBottom >= 0) {
                    setIsVisible(true);
                }
            }
            if (element2) {
                const elementTop2 = element2.getBoundingClientRect().top;
                const elementBottom2 = element2.getBoundingClientRect().bottom;
                if (elementTop2 < window.innerHeight && elementBottom2 >= 0) {
                    setIsVisible2(true);
                }
            }
            // Check if both elements are visible, then remove the event listener
            if (isVisible && isVisible2) {
                window.removeEventListener("scroll", handleScroll);
            }
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible, isVisible2]);
    return (
        <>
            <AboutHeader />
            <div className="w-full h-[100px] flex items-center justify-center bg-[#0a0d26e8] dark:bg-transparent border-solid border-t-[1px] border-gray-600">
                <SocialMedia items={MediaData} />
            </div>

            <VisionAndActivity isVisible={isVisible} />
            <TeamAndMission isVisible2={isVisible2} />

        </>
    )
}

export default AboutPage;