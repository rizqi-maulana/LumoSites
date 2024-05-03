import Image from 'next/image'
import DomainImage from '@/assets/images/Domain.png'
import ResponsiveImage from '@/assets/images/Responsive.png'
import SslImage from '@/assets/images/Ssl.png'
import clsx from 'clsx'
import { DescriptioneAbout } from './DescriptionAbout'

interface PropType {
    title: string,
    description: string,
    image: string,
    background?: boolean
}

export const AboutCard = ({ title, description, image, background }: PropType) => {
    return (
        <div className={clsx('p-5 w-full md:flex block justify-between bg-transparent border-[1px] border-solid border-black rounded-[15px] mt-10', {
            '!bg-[#6C9BFF]': background
        })}>
            <div className='flex w-full justify-between'>
                <div>
                    <h3 className={clsx('text-lg md:text-2xl font-semibold w-full', {
                        'text-white': background
                    })}>{title}</h3>
                    <DescriptioneAbout description={description} background={background} className='hidden md:block' />
                </div>
                <Image
                    src={image === "Domain" ? DomainImage : image === "Responsive" ? ResponsiveImage : image === "Ssl" ? SslImage : ''}
                    width={150}
                    height={150}
                    alt="Domain Image"
                    className='md:w-[150px] md:h-[150px] w-[80px] h-[80px]'
                />
            </div>
            <DescriptioneAbout description={description} background={background} className='block md:hidden' />

        </div>
    )
}