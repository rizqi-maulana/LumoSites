"use client"

import DynamicImage from '@/assets/images/Dynamic.png'
import StaticImage from '@/assets/images/Static.png'
import CustomImage from '@/assets/images/Custom.png'
import Image from "next/image"
import { useEffect, useState } from 'react'


export const LearnHeader = ({ title }: { title: string }) => {
    const [DescriptionWeb, setDescriptionWeb] = useState<string>('')

    useEffect(() => {
        const FetchAboutWebsite = async () => {
            const formdata = new FormData();
            formdata.append('key', title);
            const response = await fetch('/api/fetch-about-website', {
                method: "POST",
                body: formdata
            });
            const data = await response.json();
            setDescriptionWeb(data[0].description);
        };

        FetchAboutWebsite();
    }, [title]);

    return (
        <div className="flex items-center justify-between w-full px-3 md:px-32 mt-20">
            <div className='w-full'>
                <h1 className="text-[#1B325B] text-4xl md:text-7xl font-semibold">{title === 'dynamicweb' ? 'Dynamic Website' : title === 'staticweb' ? 'Static Website' : title === 'customweb' ? 'Custom Website' : ''}</h1>
                <p className="mt-5 text-base">{DescriptionWeb}</p>
            </div>
            <Image
                src={title === 'dynamicweb' ? DynamicImage : title === 'staticweb' ? StaticImage : title === 'customweb' ? CustomImage : ''}
                width={400}
                height={400}
                alt={title}
                className='hidden md:block'
            />
        </div>
    )
}