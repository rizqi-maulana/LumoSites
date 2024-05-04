"use client"

import { AndroidHeader } from "./AndroidHeader"
import { Links } from "../atoms/Links"
import clsx from "clsx"
import { useState, useEffect } from "react"
import { useScroll, useSpring, motion } from "framer-motion"

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [AdminAccess, setAdminAccess] = useState<boolean>(false)

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
        <header className="w-full top-0 z-[1000] lg:p-0 md:pr-6 md:pl-6">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <div className="w-full 2xl:w-[1430px] p-0 m-auto">
                <div className="hidden md:flex justify-between xl:px-32 h-[75px] items-center lg:px-2 py-7">
                    <Links className="text-xl font-semibold" href="/">LumoSites</Links>
                    <nav>
                        <Links className="mr-10" href="/" >Home</Links>
                        <Links className="mr-10" href="/about" >About us</Links>
                        <Links href="/contact" >Contact</Links>
                        {
                            AdminAccess &&
                            <button className="ml-10" onClick={() => HandleLogout()}>Logout</button>

                        }
                    </nav>
                </div>
                <div className="block md:hidden">
                    <AndroidHeader />
                </div>
            </div>
        </header>
    )
}