import Main from '@/assets/images/Image.png'
import Image from "next/image"
import { Buttons } from '../atoms/buttons';
import { LearnMore } from './LearnMore';
export const MainContent = () => {
    return (
        <main className="md:flex block items-center justify-between w-full h-max md:h-screen pb-56 px-3 md:px-32 mt-16 md:mt-0">
            <div className='text-4xl md:text-6xl font-semibold w-[300px] md:w-[700px]'>
                <LearnMore className='hidden md:flex' />
                <div className='h-max overflow-hidden'>
                    <h1 className="text-[#1B325B] animate__animated animate__fadeInUp animate__fast">Start Your Digital Journey</h1>
                </div>
                <LearnMore className='flex md:hidden mt-7' />

                <div className='h-max overflow-hidden'>
                    <p className='text-sm md:text-lg font-normal w-full md:w-[500px] text-left mb-5 md:mb-0 mt-2 md:mt-5 animate__animated animate__fadeInUp animate__fast'>Lumosites is a website service provider with our experienced team in design that will create attractive designs and our team will deliver a website that can be used easily and efficiently.</p>
                </div>
                <Buttons type='button' >Begin Your Journey</Buttons>
            </div>
            <div className='relative mt-24 md:mt-0'>
                {/* <Image
                    src={Main}
                    width={700}
                    height={700}
                    alt='Main Image'
                    className='hidden md:block absolute -left-[50px] z-10'
                /> */}

                {/* blur 80px */}
                <div className='bg-[#E78F9A] relative -top-[20px] md:-top-[50px] md:w-96 md:h-80 w-[100px] h-[100px] blur-[40px] md:blur-[80px] rounded-md' />
                <div className='bg-[#85A6F4] absolute md:-left-[100px] -bottom-[50px] right-[150px] md:-bottom-[150px] md:w-96 md:h-80 w-[100px] h-[100px] blur-[40px] md:blur-[80px] rounded-md' />
            </div>
        </main>
    )
}