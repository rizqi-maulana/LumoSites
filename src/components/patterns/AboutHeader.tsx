import { Buttons } from '../atoms/buttons'
import { BackgroundBeams } from './BackgroundBeams'

import { Translate } from './Translator'

import { usePathname } from 'next/navigation'

export const AboutHeader = () => {

    const pathname = usePathname()

    return (
        <section className="flex items-center w-full px-3 lg:px-32 mt-2 lg:mt-0 bg-[#1B2538] lg:h-[600px] h-max relative left-0 flex-col py-12 lg:py-[120px]">
            <div className='h-max overflow-hidden'>
                <h2 className='lg:text-5xl text-3xl text-white text-center mb-10 animate__animated animate__fadeInUp animate__fast' style={{
                    fontFamily: "Poppins",
                    fontWeight: "bold"
                }}><Translate to='TENTANG KAMI.'>ABOUT US.</Translate></h2>
            </div>

            <div className='h-max overflow-hidden'>
                <div className='text-center text-white font-thin lg:w-[900px] flex-col flex gap-6 lg:mb-[100px] mb-10'>
                    <p className='lg:text-base text-sm font-normal animate__animated animate__fadeInUp animate__fast'> <><Translate to='Lumosites merupakan situs yang menyediakan jasa pembuatan website dengan tim kami yang mempunyai visi yang sama dalam membuat website yang menarik, mudah digunakan dan efisien.'>Lumosites is a site that provides website creation services with our team who have the same vision in creating websites that are attractive, easy to use and efficient.</Translate> <br /> <br /> <Translate to='Kami tahu betapa pentingnya website dalam sebuah bisnis, oleh karena itu kami akan memberikan pelayanan terbaik kami dan akan memberikan hasil yang memuaskan yang pastinya akan menguntungkan bisnis Anda. Kami akan membantu Anda melalui desain situs web kami yang menarik, responsif, dan efisien.'>We know how a website is very important in a business, therefore we will provide our best service and will provide satisfactory results which will definitely benefit your business. We will help you through our attractive, responsive and efficient website design.</Translate> </></p>
                </div>
            </div>
            <Buttons type='button' href='/contact' className='z-[100]'><Translate to='Hubungi kami'>Contact us</Translate></Buttons>
            <BackgroundBeams />
        </section>
    )
}