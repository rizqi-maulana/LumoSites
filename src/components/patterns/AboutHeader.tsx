import Stars from '@/assets/images/Stars.png'
import Image from "next/image"
import { Buttons } from '../atoms/buttons'

export const AboutHeader = () => {
    return (
        <section className="md:flex block items-center w-full px-3 md:px-32 mt-16 md:mt-0 bg-[#1B2538] h-[600px] absolute left-0 flex-col pt-[130px]">
            <h2 className='text-5xl text-white font-semibold mb-10'>ABOUT US</h2>
            <div className='text-center text-white font-thin w-[900px] flex-col flex gap-6 mb-[100px]'>
                <p>Lumosites adalah sebuah situs penyedia jasa pembuatan website dengan tim kami yang memiliki visi yang sama dalam menciptakan website yang menarik serta mudah digunakan dan juga efisien.</p>
                <p>kami tahu bagaimana website itu sangat penting dalam sebuah bisnis, oleh karena itu kami akan memberikan layanan terbaik kami dan akan memberikan hasil yang memuaskan juga pastinya menguntungkan bisnis anda. kami akan membantu anda melalui desain website kami yang menarik, responsif, dan juga efisien.</p>
            </div>
            <Buttons type='button' >Contact us</Buttons>
        </section>
    )
}