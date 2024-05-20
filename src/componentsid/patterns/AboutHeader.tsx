import { Buttons } from '../atoms/buttons'
import { BackgroundBeams } from './BackgroundBeams'

export const AboutHeader = () => {
    return (
        <section className="flex items-center w-full px-3 lg:px-32 mt-2 lg:mt-0 bg-[#1B2538] lg:h-[600px] h-max relative left-0 flex-col py-12 lg:py-[120px]">
            <div className='h-max overflow-hidden'>
                <h2 className='lg:text-5xl text-3xl text-white text-center mb-10 animate__animated animate__fadeInUp animate__fast' style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold"
                }}>ABOUT US.</h2>
            </div>

            <div className='h-max overflow-hidden'>
                <div className='text-center text-white font-thin lg:w-[900px] flex-col flex gap-6 lg:mb-[100px] mb-10'>
                    <p className='lg:text-base text-sm font-normal animate__animated animate__fadeInUp animate__fast'>
Lumosites merupakan situs yang menyediakan jasa pembuatan website dengan tim kami yang mempunyai visi yang sama dalam membuat website yang menarik, mudah digunakan dan efisien. <br /> <br /> Kami tahu betapa pentingnya sebuah website dalam sebuah bisnis, oleh karena itu kami akan memberikan pelayanan terbaik kami dan akan memberikan hasil yang memuaskan yang pastinya akan menguntungkan bisnis Anda. Kami akan membantu Anda melalui desain situs web kami yang menarik, responsif, dan efisien.</p>
                </div>
            </div>
            <Buttons type='button' href='/contact' className='z-[100]'>Hubungi kami</Buttons>
            <BackgroundBeams />
        </section>
    )
}