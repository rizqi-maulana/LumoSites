"use client"

import { useEffect, useState } from "react";
import EmblaCarousel from "../atoms/EmbalCarausel"
import { AdminButton } from "../atoms/admin-button"
import { EmblaOptionsType } from 'embla-carousel';

const OPTIONS: EmblaOptionsType = { loop: true }



export const Banner = () => {
    const [AdminAccess, setAdminAccess] = useState<boolean>(false)
    useEffect(() => {
        const GetLogin = () => {
            const getCookie = (name: string) => {
                const value = `; ${document.cookie}`;
                const parts = value.split(`; ${name}=`);
                if (parts.length === 2) {
                    return parts.pop()?.split(';').shift();
                }
                return null;
            };

            const loginCookie = getCookie('login');

            if (loginCookie) {
                setAdminAccess(true)
            }

        }
        GetLogin()
    }, [])
    return (
        <section className='mx-2 lg:px-32'>
            <EmblaCarousel options={OPTIONS} />
            {
                AdminAccess && <AdminButton />
            }
        </section>
    )
}