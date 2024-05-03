import WhatsappImage from '@/assets/images/whatsapp-svgrepo-com.svg'
import EmailImage from '@/assets/images/email-svgrepo-com.svg'
import Image from "next/image"

interface Prototype {
    title: string,
    description: string
}

export const ContactCard = ({ title, description }: Prototype) => {
    return (
        <div className="flex items-center border-black border-2 border-solid mt-7 md:mt-0 md:mr-10 md:p-6 p-2 w-[250px] md:w-[400px] rounded-[5px]">
            <Image
                src={title === "Email" ? EmailImage : WhatsappImage}
                width={90}
                height={90}
                alt={title}
                className='w-10 h-10 md:w-[90px] md:h-[90px]'
            />
            <div className='ml-5'>
                <h3 className='font-semibold '>{title}</h3>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}