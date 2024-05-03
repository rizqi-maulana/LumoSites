import Image from "next/image"
import Send from '@/assets/images/send (3) 1.png'
import { ContactForm } from "@/components/patterns/ContactForm"
import { ContactCard } from "@/components/atoms/contactcard"

const ContactPage = () => {
    return (
        <>
            <section className="flex items-center justify-between w-full px-3 md:px-32 mt-16 md:mt-0">
                <div className='text-4xl md:text-7xl font-semibold'>
                    <h1 className="text-[#1B325B]">Where to</h1>
                    <h1 className="text-[#6C9BFF] mt-2 md:mt-5">Contact <span className="text-[#1B325B]">us?</span></h1>
                </div>
                <Image
                    src={Send}
                    width={300}
                    height={300}
                    alt='Main Image'
                    className='hidden md:block'
                />
            </section>
            <section className="mx-2 md:mx-32 mt-20 md:flex block justify-evenly">
                <div className="w-full mb-20">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-3">Leave a message</h1>
                    <p className="w-[90%] md:w-[450px] text-sm">If this piques your interest, we warmly welcome you to get in touch with us. Whether you
                        have questions, need more information, or are ready to start, our team is here to assist you
                        every step of the way. Don&apos;t hesitate to reach out and discover how we can bring your vision
                        to life!</p>

                </div>
                <ContactForm />
            </section>
            <div className="flex md:px-32 mt-10">
                <div className="w-[50%] mx-auto h-[1px] bg-black mb-7 mt-5 md:mb-20" />
                <p className="md:mx-10 mx-5 text-sm md:text-lg">Or</p>
                <div className="w-[50%] mx-auto h-[1px] bg-black mb-7 mt-5 md:mb-20" />
            </div>
            <section className="md:px-32 px-2 md:flex block mb-28">
                <ContactCard title="Email" description="lumosites@gmail.com" />
                <ContactCard title="Whatsapp" description="+87832478" />
            </section>
        </>
    )
}

export default ContactPage