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
        <main className="lg:flex block items-center justify-between w-full h-max lg:h-screen md:pb-56 pb-24 px-3 lg:px-32 mt-16 lg:mt-0 ">
            <div className='text-4xl lg:text-6xl w-[90%] m-auto md:w-[500px] items-center lg:w-[1000px] md:block flex flex-col md:justify-center lg:text-left text-center'>
                <LearnMore className='hidden lg:flex' />
                <h1 className="text-[#1B325B] text-3xl lg:text-5xl mb-2 lg:mb-5 md:h-auto h-[70px]" style={{
                    fontFamily: 'Poppins',
                    fontWeight: '800',
                }}>Let us <span className='text-[#6C9BFF] animate-blink border-r-4 border-[#6C9BFF] pr-2'>{words[index].substring(0, subIndex)}
                    </span></h1>
                <LearnMore className='flex lg:hidden mt-7' />
                <div className='md:w-[600px]'>
                    <TextGenerateEffect words='a website service provider with our experienced team in design that will create attractive designs and our team will deliver a website that can be used easily and efficiently.' />
                </div>
                <Buttons className='my-12 md:m-0' type='button'>Begin Your Journey</Buttons>
            </div>
            <div className='relative md:-left-5'>
                <div className='md:flex flex-col absolute left-10 md:left-[-50px] z-10 items-center gap-4 pt-8'>
                    <div className='w-[240px] backdrop-blur-sm bg-white/65 shadow-lg h-[85px] border border-black rounded-md flex ml-6 md:ml-0 justify-center items-center'>
                        <h3 className='text-[#8D868C]'>Responsive Design</h3>
                    </div>
                    <div className='flex justify-center relative gap-10'>
                        <div className='mt-10 pr-8 pl-8 pb-3 pt-3 backdrop-blur-sm bg-white/65 shadow-lg flex-col border border-black rounded-md flex justify-center items-center'>
                            <h3 className='text-[#216BFF] font-semibold'>Include</h3>
                            <p className='text-[#8D868C] text-[13px] text-center'>Domain & hosting</p>
                        </div>
                        <div className='mt-6 mr-10 pr-5 pl-5 backdrop-blur-sm bg-white/65 shadow-lg h-[50px] py-8 md:py-0 border border-black rounded-md flex justify-center items-center text-[#8D868C] text-[13px] text-center'>High level SEO</div>
                    </div>
                </div>
                <div className='md:bg-[#E78F9A] bg-[#e78f9971] z-[-100] relative md:top-[-50px] w-96 h-80 blur-[80px] rounded-md' />
                <div className='md:bg-[#85A6F4] bg-[#85a6f482] z-[-100] absolute left-[-200px] md:bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
            </div>

        </main>
    )
}