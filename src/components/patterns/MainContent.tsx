import Main from '@/assets/images/Image.png'
import Image from "next/image"
import { FaCircleChevronRight } from "react-icons/fa6";
import { Buttons } from '../atoms/buttons';
export const MainContent = () => {
    return (
        <main className="flex items-center justify-between w-full h-screen pb-56 px-3 md:px-32 mt-16 md:mt-0">
            <div className='text-4xl md:text-7xl font-semibold w-[700px]'>
                <div className='flex h-10 items-center border-solid border-[#6C9BFF] border-[2px] w-max rounded-full mb-5 relative'>
                    <FaCircleChevronRight className='text-[#6C9BFF] w-10 h-10 absolute left-0' />
                    <h3 className='text-base font-normal mx-3 ml-14'>Learn & view more about us</h3>
                </div>
                <h1 className="text-[#1B325B] text-6xl">Start Your Digital Journey</h1>
                <p className='text-sm md:text-lg font-normal w-[90%] md:w-[500px] text-left mt-2 md:mt-5'>Lumosites is a website service provider with our experienced team in design that will create attractive designs and our team will deliver a website that can be used easily and efficiently.</p>
                <Buttons type='button' >Begin Your Journey</Buttons>
            </div>
            <div className='relative'>
                <Image
                    src={Main}
                    width={700}
                    height={700}
                    alt='Main Image'
                    className='hidden md:block absolute left-[-50px] z-10'
                />
                <div className='bg-[#E78F9A] relative top-[-50px] w-96 h-80 blur-[80px] rounded-md' />
                <div className='bg-[#85A6F4] absolute left-[-100px] bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
            </div>
        </main>
    )
}