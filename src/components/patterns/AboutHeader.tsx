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
                    <p className='lg:text-base text-sm font-normal animate__animated animate__fadeInUp animate__fast'>Luposites is a site that provides website creation services with our team who have the same vision in creating websites that are attractive, easy to use and efficient. <br /> <br /> We know how a website is very important in a business, therefore we will provide our best service and will provide satisfactory results which will definitely benefit your business. We will help you through our attractive, responsive and efficient website design.</p>
                </div>
            </div>
            <Buttons type='button' href='/contact' className='z-[100]'>Contact us</Buttons>
            <BackgroundBeams />
        </section>
    )
}