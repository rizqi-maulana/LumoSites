"use client"

import { AndroidHeader } from "./AndroidHeader"
import { Links } from "../atoms/Links"
import { useCallback, useEffect, useState } from "react"
import { useScroll, useSpring, motion } from "framer-motion"
import { NavbarMenu } from "./NavbarMenu"
import { Langmenu } from "./LangMenu"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { usePathname } from 'next/navigation'


import { Translate } from "./Translator"
import clsx from "clsx"


export const Header = () => {

    const [lang, setLang] = useState<string>('')
    const [Darkmode, setDarkmode] = useState<boolean>(false)
    const [AdminAccess, setAdminAccess] = useState<boolean>(false)
    const [ShowHeader, setShowHeader] = useState<boolean>(false)

    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            var getData = localStorage.getItem("theme") === "dark";
            setDarkmode(getData)
        }
        setTimeout(() => {
            setShowHeader(true)
        }, 200);
    }, [])

    useEffect(() => {
        if (pathname?.includes('id')) {
            setLang('/id')
        } else {
            setLang('')
        }
    }, [pathname])



    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const HandleLogout = () => {
        document.cookie = "login=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
        window.location.reload()
    }

    const HandleDarkMode = useCallback(() => {
        if (Darkmode) {
            document.documentElement.classList.remove('dark')
            localStorage.removeItem('theme')
            setDarkmode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setDarkmode(true)
        }
    }, [Darkmode])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 0);
    //     };

    //     const GetLogin = () => {
    //         const getCookie = (name: string) => {
    //             const value = `; ${document.cookie}`;
    //             const parts = value.split(`; ${name}=`);
    //             if (parts.length === 2) {
    //                 return parts.pop()?.split(';').shift();
    //             }
    //             return null;
    //         };

    //         const loginCookie = getCookie('login');

    //         if (loginCookie) {
    //             setAdminAccess(true)
    //         }

    //     }
    //     GetLogin()

    //     // Add scroll event listener when component mounts
    //     window.addEventListener('scroll', handleScroll);

    //     // Remove scroll event listener when component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <header className={clsx('w-full lg:p-0 lg:px-6 relative -top-[100px] transition-all duration-300', { '!-top-0': ShowHeader })}>
            <motion.div className="progress-bar z-[1002]" style={{ scaleX }} />
            <div className="w-full 2xl:container p-0 m-auto">
                <div className="hidden lg:flex justify-between xl:px-[105px] h-[75px] items-center lg:px-2 py-7">

                    <Links className="text-xl dark:text-white" href="/" style={{
                        fontFamily: "Poppins",
                        fontWeight: "bold"
                    }}>LumoSites</Links>
                    <nav className="flex items-center dark:text-white">
                        <Links className="mr-10" href={`${lang}/`} ><Translate to="Beranda">Home</Translate></Links>
                        <NavbarMenu />
                        <Links className="mr-10" href={`${lang}/about`} ><Translate to="Tentang kami">About us</Translate></Links>

                        <Links className="mr-10" href={`${lang}/contact`} ><Translate to="Kontak">Contact</Translate></Links>
                        <Langmenu />
                        {
                            AdminAccess &&
                            <button className="ml-10" onClick={() => HandleLogout()}><Translate to="Keluar">Log out</Translate></button>
                        }
                        <button onClick={() => HandleDarkMode()}>{Darkmode ? <MdOutlineLightMode className="text-2xl" /> : <MdOutlineDarkMode className="text-2xl" />}</button>
                    </nav>
                </div>
                <div className="block lg:hidden">
                    <AndroidHeader />
                </div>
            </div>
        </header>
    )
}