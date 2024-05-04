import Main from '@/assets/images/Image.png'
import Image from "next/image"
import { FaCircleChevronRight } from "react-icons/fa6";
import { Buttons } from '../atoms/buttons';
export const MainContent = () => {
    return (
        <main className="flex items-center xl:justify-evenly justify-between w-full h-screen pb-56 xl:px-32  mt-12 md:mt-0">
            <div className='text-4xl md:text-7xl font-semibold w-[700px]'>
                <div className='flex h-10 cursor-pointer items-center border-solid border-[3px] shadow-lg border-[#6C9BFF] w-max rounded-full mb-9 relative'>
                    <FaCircleChevronRight className='text-[#6C9BFF] ml-1 w-8 h-6 absolute left-0' />
                    <h3 className='text-base font-normal mx-3 ml-11'>Learn & view more about us</h3>
                </div>
                <h1 className="text-[#1B325B] text-5xl">let us take care of it.</h1>
                <p className='text-sm md:text-lg font-normal w-[90%] md:w-[500px] text-left mt-2 md:mt-5'>Lumosites is a website service provider with our experienced team in design that will create attractive designs and our team will deliver a website that can be used easily and efficiently.</p>
                <Buttons type='button'>Get in touch</Buttons>
            </div>
            <div className='relative'>
                <div className='hidden md:flex flex-col absolute left-[-50px] z-10 items-center gap-4 pt-8'>
                    <div className='w-[240px] backdrop-blur-sm bg-white/65 shadow-lg h-[85px]  border border-black rounded-md flex justify-center items-center'>
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
                <div className='bg-[#E78F9A] relative top-[-50px] w-96 h-80 blur-[80px] rounded-md' />
                <div className='bg-[#85A6F4] absolute left-[-200px] bottom-[-150px] w-96 h-80 blur-[80px] rounded-md' />
            </div>
        </main>
    )
}