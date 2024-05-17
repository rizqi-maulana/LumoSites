"use client"
import { Buttons } from '../atoms/buttons';
import React, { useEffect, useState } from 'react';
import { LearnMore } from './LearnMore';
import { words } from '@/data/MainWords';
import { TextGenerateEffect } from './GenerateText';

export const MainContent = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (subIndex === 0) {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                } else {
                    setSubIndex((prev) => prev - 1);
                }
            } else {
                if (subIndex === words[index].length) {
                    setTimeout(() => {
                        setIsDeleting(true);
                    }, 2000);
                } else {
                    setSubIndex((prev) => prev + 1);
                }
            }
        };

        const timeout = setTimeout(handleTyping, 50);
        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, words, index]);
    return (
        <main className="lg:flex block items-center justify-between w-full h-max lg:h-screen pb-56 px-3 lg:px-32 mt-16 lg:mt-0">
            <div className='text-4xl lg:text-6xl font-semibold w-[300px] md:w-[500px] lg:w-[700px]'>
                <LearnMore className='hidden lg:flex' />
                <h1 className="text-[#1B325B] text-3xl lg:text-5xl font-bold mb-2 lg:mb-5">Let us <span className='text-[#6C9BFF] animate-blink border-r-4 border-[#6C9BFF] pr-2'>{words[index].substring(0, subIndex)}
                </span></h1>
                <LearnMore className='flex lg:hidden mt-7' />
                <TextGenerateEffect words='a website service provider with our experienced team in design that will create attractive designs and our team will deliver a website that can be used easily and efficiently.' />
                <Buttons type='button' >Begin Your Journey</Buttons>
            </div>
            <div className='relative'>
                <div className='hidden md:flex flex-col absolute left-[-50px] z-10 items-center gap-4 pt-8'>
                    <div className='w-[240px] backdrop-blur-sm bg-white/65 shadow-lg h-[85px] border border-black rounded-md flex justify-center items-center'>
                        <h3 className='text-[#8D868C]'>Responsive Design</h3>
                    </div>
                    <div className='flex justify-center relative gap-10'>
                        <div className='mt-10 mr-10 pr-8 pl-8 pb-3 pt-3 backdrop-blur-sm bg-white/65 shadow-lg flex-col border border-black rounded-md flex justify-center items-center'>
                            <h3 className='text-[#216BFF] font-semibold'>Include</h3>
                            <p className='text-[#8D868C] text-[13px]'>Domain & hosting</p>
                        </div>
                    <div className='mt-6 mr-10 pr-5 pl-5 backdrop-blur-sm bg-white/65 shadow-lg h-[50px]  border border-black rounded-md flex justify-center items-center text-[#8D868C] text-[13px]'>High level SEO</div>
                    </div>
                </div>
                <div className='bg-[#E78F9A] z-[-100] relative top-[-50px] w-96 h-80 blur-[80px] rounded-md' />
                <div className='bg-[#85A6F4] z-[-100] absolute left-[-200px] bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
            </div>
            
        </main>
    )
}