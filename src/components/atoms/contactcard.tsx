import WhatsappImage from '@/assets/images/whatsapp-svgrepo-com.svg'
import EmailImage from '@/assets/images/email-svgrepo-com.svg'
import Image from "next/image"

interface Prototype {
    title: string,
    description: string
}

export const ContactCard = ({ title, description }: Prototype) => {
    return (
        <div className="flex items-center mt-7 lg:mt-0 lg:mr-10 lg:p-6 p-2 w-[250px] lg:w-[400px] rounded-[5px]">
            <Image
                src={title === "Email" ? EmailImage : WhatsappImage}
                width={90}
                height={90}
                alt={title}
                className='w-10 h-10 lg:w-[90px] lg:h-[90px]'
            />
            <div className='ml-5'>
                <h3 className='font-semibold '>{title}</h3>
                <p className='text-sm'>{description}</p>
            </div>
        </div>
    )
}