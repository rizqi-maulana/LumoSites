import { ContactForm } from "@/components/patterns/ContactForm"
import { ContactCard } from "@/components/atoms/contactcard"

const ContactPage = () => {
    return (
        <>
            <section className="flex items-center justify-between w-full px-3 lg:px-32 mt-16 lg:mt-0">
                <div className='text-4xl lg:text-6xl font-semibold w-[300px] lg:w-[700px]'>
                    <div className='h-max overflow-hidden w-full mb-2 lg:mb-5 pb-2'>
                        <h1 className="text-[#1B325B] animate__animated animate__fadeInUp animate__fast">Contact us Easily</h1>
                    </div>
                </div>
                <div className='relative mt-24'>
                    {/* blur 80px */}
                    <div className='bg-[#E78F9A] relative -top-[20px]  lg:w-96 lg:h-80 w-[100px] h-[100px] blur-[40px] lg:blur-[80px] rounded-md' />
                    <div className='bg-[#85A6F4] absolute -left-0 lg:-left-[1200px] z-20 lg:w-96 lg:h-80 w-[100px] h-[100px] blur-[40px] lg:blur-[80px] rounded-md' />
                </div>
            </section>
            <section className="mx-2 lg:mx-32 lg:flex block justify-evenly relative z-50">
                <div className="w-full mb-20">
                    <div className='h-max overflow-hidden w-full lg:w-[500px] pb-2'>
                        <h1 className="text-2xl lg:text-3xl font-semibold mb-3 animate__animated animate__fadeInUp animate__fast">Leave a message</h1>
                    </div>
                    <div className='h-max overflow-hidden w-full lg:w-[500px] pb-2'>
                        <p className="w-[90%] lg:w-[450px] text-sm animate__animated animate__fadeInUp animate__fast">If this piques your interest, we warmly welcome you to get in touch with us. Whether you
                            have questions, need more information, or are ready to start, our team is here to assist you
                            every step of the way. Don&apos;t hesitate to reach out and discover how we can bring your vision
                            to life!</p>
                    </div>
                </div>
                <ContactForm />
            </section>
            <div className="flex lg:px-32 mt-10">
                <div className="w-[50%] mx-auto h-[1px] bg-black mb-7 mt-5 lg:mb-20" />
                <p className="lg:mx-10 mx-5 text-sm lg:text-lg">Or</p>
                <div className="w-[50%] mx-auto h-[1px] bg-black mb-7 mt-5 lg:mb-20" />
            </div>
            <section className="lg:px-32 px-2 lg:flex block mb-28">
                <ContactCard title="Email" description="lumosites@gmail.com" />
                <ContactCard title="Whatsapp" description="+87832478" />
            </section>


            <section className="lg:flex block items-center justify-between w-full px-3 lg:px-32 bg-[#1B2538] py-16">
                <div className='text-4xl lg:text-7xl font-semibold'>
                    <h1 className="text-white">location</h1>
                    <h1 className="text-[#6C9BFF] mt-2 lg:mt-5">Where we <span className="text-white">are</span></h1>
                    <div className='w-[60%] rounded-full bg-[#6C9BFF] h-1 mt-5' />
                    <p className="text-white mt-5 text-sm font-normal w-full md:w-[500px] lg:mb-0 mb-5">Jl. Karang Buaya Jl. RM. Panji Anom No.13
                        Jl. Karang Buaya Jl. RM. Panji Anom No.13, RT.01, Pagutan Tim., Kec. Mataram, Kota Mataram, Nusa Tenggara Bar. 83117</p>
                </div>
                <div className="overflow-hidden md:w-[300px] md:h-[300px] lg:w-[500px] lg:h-[500px] w-full h-[200px]">
                    <div id="g-mapdisplay" className="h-full w-full max-w-full">
                        <iframe className="h-full w-full rounded-lg" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Jl.+Raden+Mas+Panji+Anom+Jl.+Karang+Buaya+No.13,+Pagutan+Tim.,+Kec.+Mataram,+Kota+Mataram,+Nusa+Tenggara+Bar.+83117&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                    </div>
                </div>

            </section>
        </>
    )
}

export default ContactPage