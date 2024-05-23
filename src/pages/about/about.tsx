"use client"

import { AboutHeader } from "@/components/patterns/AboutHeader"
import { TeamCard } from "@/components/patterns/TeamCard"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { Team } from "@/data/Team"
import Image from "next/image"
import { MediaData } from "@/data/SocialMedia"
import { SocialMedia } from "@/components/patterns/SocialMedia"
import Activity1 from '@/assets/images/activity1.jpg'
import Activity2 from '@/assets/images/activity2.jpg'

import { usePathname } from 'next/navigation'
import { Translate } from "@/components/patterns/Translator"


const AboutPage = () => {

    const pathname = usePathname()

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
            <div className="w-full h-[100px] flex items-center justify-center bg-[#0a0d26e8] dark:bg-transparent border-solid border-t-[1px] border-gray-600">
                <SocialMedia items={MediaData} />
            </div>
            <section className="w-full flex flex-col lg:flex-row justify-evenly pt-[150px] px-[7%] lg:px-0">
                <div className="lg:w-[400px] lg:text-[24px] lg:mb-0 mb-16">
                    <h3 className="text-[#407FFF] font-semibold mb-2"><Translate to="Visi kami">Our vision</Translate></h3>
                    <div className='h-max overflow-hidden'>
                        <p className={clsx('lg:w-[440px] text-base text-[#303232] dark:text-white visi animate__animated animate__fast', {
                            'animate__fadeInUp': isVisible
                        })}>{pathname?.includes('id') ? 'Mendesain website yang menarik dan fungsional adalah pilihan terbaik bagi klien yang ingin meningkatkan kehadiran online pelanggannya dengan inovasi dan kreativitas.' : 'Designing attractive and functional websites is the best choice for clients who want to increase their customers online presence with innovation and creativity.'}</p>
                    </div>
                    <div className="mt-[160px] h-[0.5px] opacity-100 bg-black dark:bg-white w-[100px]" />
                </div>
                <div className="flex flex-col gap-4 relative">
                    <h3 className="w-full float-right opacity-45 lg:block hidden text-[#1B325B] dark:text-white">#activity</h3>
                    <Image src={Activity1} alt="Activity1" className="lg:h-auto shadow-2xl lg:w-[300px] h-[170px] w-full" />
                    <Image src={Activity2} alt="Activity2" className="lg:h-auto shadow-2xl absolute -bottom-14 -left-12 lg:w-[230px] h-[170px] w-full" />
                </div>
            </section>

            <section className="w-full flex flex-col-reverse lg:flex-row justify-evenly lg:pt-[150px] pt-14 mt-[150px] pb-[150px]">
                <div className="flex flex-col gap-4 overflow-auto">
                    <h3 className="w-full text-[46px] font-bold text-[#1B325B] dark:text-white lg:px-0 px-[7%]"><Translate to="Team kami">Our team</Translate></h3>
                    <div className="lg:w-[550px] flex gap-4 overflow-x-scroll lg:overflow-hidden lg:flex-wrap flex-nowrap px-10 lg:px-0">
                        {
                            Team.map((data: any) => <TeamCard key={data.name} image={data.image} title={data.title} name={data.name} animateDelay={data.delay} />)
                        }
                    </div>
                </div>
                <div className="lg:w-[400px] text-[24px] lg:mb-0 mb-16 lg:px-0 px-[7%] ">
                    <h3 className="font-semibold mb-2 text-[#1B325B] dark:text-[#407FFF]"><Translate to="Misi kami">Our mission</Translate></h3>

                    <div className='h-max overflow-hidden'>
                        <ul className={clsx('lg:w-[440px] misi text-[#303232] dark:text-white text-[16px] flex flex-col gap-3 animate__animated animate__fast', {
                            'animate__fadeInUp': isVisible2
                        })}>
                            <li>1. <Translate to="Menyediakan desain web unik untuk memenuhi kebutuhan setiap klien.">Provide unique web designs to suit each client&apos;s needs.</Translate> </li>
                            <li>2. <Translate to="Menyediakan layanan pengembangan web berkualitas tinggi yang fokus pada kecepatan, keamanan, dan daya tanggap.">Provide high-quality web development services that focus on speed, security and responsiveness.</Translate> </li>
                            <li>3. <Translate to="Menyediakan desain web unik untuk memenuhi kebutuhan setiap klien.">Increase customer satisfaction by carrying out clear communication, close cooperation, and providing the best after-sales service.</Translate> </li>
                            <li>4. <Translate to="Jadilah orang pertama yang memanfaatkan teknologi terkini dalam membuat dan mengelola website.">Be the first to utilize the latest technology in creating and managing websites.</Translate> </li>
                        </ul>
                    </div>
                    <div className="mt-[60px] h-[0.5px] opacity-100 bg-black dark:bg-white w-[100px]" />
                </div>
            </section>

        </>
    )
}

export default AboutPage;