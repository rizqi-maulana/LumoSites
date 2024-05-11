import Stars from '@/assets/images/Stars.webp'
import Image from "next/image"
import { Buttons } from '../atoms/buttons'

export const AboutHeader = () => {
    return (
        <section className="flex items-center w-full px-3 md:px-32 mt-2 md:mt-0 bg-[#1B2538] md:h-[600px] h-max absolute left-0 flex-col py-12 md:py-[120px]">
            <h2 className='md:text-5xl text-3xl text-white font-semibold text-center mb-10'>ABOUT US.</h2>
            <div className='text-center text-white font-thin lg:w-[900px] flex-col flex gap-6 lg:mb-[100px] mb-10'>
                <p className='md:text-base text-sm font-normal'>Lumosites adalah sebuah situs penyedia jasa pembuatan website dengan tim kami yang memiliki visi yang sama dalam menciptakan website yang menarik serta mudah digunakan dan juga efisien. <br /> <br /> kami tahu bagaimana website itu sangat penting dalam sebuah bisnis, oleh karena itu kami akan memberikan layanan terbaik kami dan akan memberikan hasil yang memuaskan juga pastinya menguntungkan bisnis anda. kami akan membantu anda melalui desain website kami yang menarik, responsif, dan juga efisien.</p>
            </div>
            <Buttons type='button' className='z-[100]'>Contact us</Buttons>
            <div className='w-full h-[300px] absolute bottom-0 overflow-hidden'>
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] relative rotate-12 -bottom-[50px]' />
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] absolute -bottom-[120px] ' />
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] absolute -bottom-[120px] ' />
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] absolute -bottom-[100px] left-52 ' />
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] absolute rotate-12 -bottom-[50px] top-0 right-0  ' />
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] absolute right-0 ' />
                <Image src={Stars} width={200} height={200} alt="stars" className='w-32 md:w-[200px] absolute right-52 ' />
            </div>
        </section>
    )
}