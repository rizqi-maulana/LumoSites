"use client"

import { AboutHeader } from "@/components/patterns/AboutHeader"
import { WhyShould } from "@/components/patterns/WhyShould"
import { TeamCard } from "@/components/patterns/TeamCard"
import Image from "next/image"
import dummyImg from '@/assets/images/jung.jpg'
import { useEffect, useState } from "react"
import clsx from "clsx"


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

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isVisible, isVisible2]);
    return (
        <>
            <AboutHeader />
            <WhyShould />
            <section className="w-full flex flex-col md:flex-row justify-evenly pt-[150px] px-[7%] md:px-0">
                <div className="lg:w-[400px] md:w-[40%] lg:text-[24px] md:mb-0 mb-16">
                    <h3 className="text-[#407FFF] font-semibold mb-2">Our vision</h3>
                    <div className='h-max overflow-hidden'>
                        <p className={clsx('lg:w-[440px] text-base text-[#303232] visi animate__animated animate__fast', {
                            'animate__fadeInUp': isVisible
                        })}>Merancang website yang menarik dan fungsional sebagai pilihan terbaik bagi klien yang ingin meningkatkan kehadiran online pelanggan dengan inovasi dan kreativitas. </p>
                    </div>
                    <div className="mt-[60px] h-[0.5px] opacity-100 bg-black w-[100px]" />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="w-full float-right opacity-45 md:block hidden">#activity</h3>
                    <div className="bg-[#D4D5D6] lg:h-[200px] md:h-[120px] lg:w-[450px] md:w-[270px] h-[170px] w-full"></div>
                    <div className="bg-[#D4D5D6] lg:h-[200px] md:h-[120px] lg:w-[320px] md:w-[220px] h-[170px] w-full"></div>
                </div>
            </section>

            <section className="w-full flex flex-col-reverse lg:flex-row justify-evenly lg:pt-[150px] pt-14 bg-[#F7FCFD] mt-[150px] pb-[150px]">
                <div className="flex flex-col gap-4 overflow-auto">
                    <h3 className="w-full text-[46px] font-bold text-[#1B325B] lg:px-0 px-[7%]">Our team</h3>
                    <div className="lg:w-[550px] flex gap-4 overflow-hidden lg:flex-wrap flex-nowrap px-10 md:px-0">
                        <TeamCard image={dummyImg} title="WEB DEVELOPMENT" name="Jundia Anwari" animateDelay="0.1" />
                        <TeamCard image={dummyImg} title="WEB DEVELOPMENT" name="Jundia Anwari" animateDelay="0.3" />
                        <TeamCard image={dummyImg} title="WEB DEVELOPMENT" name="Maulana" animateDelay="0.5" />
                        <TeamCard image={dummyImg} title="WEB DEVELOPMENT" name="Jundia Anwari" animateDelay="0.7" />
                        <TeamCard image={dummyImg} title="WEB DEVELOPMENT" name="Jundia Anwari" animateDelay="0.9" />
                        <TeamCard image={dummyImg} title="WEB DEVELOPMENT" name="Jundia Anwari" animateDelay="1" />
                    </div>
                </div>
                <div className="md:w-[400px] text-[24px] lg:mb-0 mb-16 lg:px-0 px-[7%] ">
                    <h3 className="font-semibold mb-2">Our vision</h3>

                    <div className='h-max overflow-hidden'>
                        <ul className={clsx('md:w-[440px] misi text-[#303232] text-[16px] flex flex-col gap-3 animate__animated animate__fast', {
                            'animate__fadeInUp': isVisible2
                        })}>
                            <li>1. Menyediakan desain web yang unik yang sesuai dengan kebutuhan setiap klien.</li>
                            <li>2. Memberikan layanan pengembangan web berkualitas tinggi yang fokus pada kecepatan, keamanan, dan responsif.</li>
                            <li>3. Meningkatkan kepuasan pelanggan dengan melakukan komunikasi yang jelas, kerja sama yang erat, dan memberikan layanan purna jual terbaik.</li>
                            <li>4. Menjadi yang pertama dalam memanfaatkan teknologi terkini dalam pembuatan dan pengelolaan situs web.</li>
                        </ul>
                    </div>
                    <div className="mt-[60px] h-[0.5px] opacity-100 bg-black w-[100px]" />
                </div>
            </section>

        </>
    )
}

export default AboutPage;