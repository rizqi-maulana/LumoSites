"use client"
import React, { useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarauselDotButton'

import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

type PropType = {
    options: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const [Banners, setBanners] = useState<any[]>([])
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)


    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const FetchBanner = async () => {
        const response = await fetch('/api/fetch-all-banner')
        const data = await response.json()
        data && setBanners(data)
    }

    useEffect(() => {
        FetchBanner()
    }, [])
    return (
        <section className="embla w-full  lg:mx-auto">
            <style jsx>{`
                .css-4wklz5 {
                    width: 1440px;
                    max-width: 100%;
                    height: 100px;
                }

                @media screen and (min-width: 769px) {
                    .css-4wklz5 {
                        padding-top: 1.5rem;
                        padding-bottom: 1.5rem;
                        height: calc(302px + 2 * 1.5rem);
                    }
                }
            `}</style>
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container css-4wklz5" >
                    {Banners.map((banner: any) => (
                        <Image key={banner.id} src={banner.banner_link} alt='Banner' width={1440} height={302} className='lg:w-full lg:h-full rounded-[5px]' />
                    ))}
                </div>
            </div>

            <div className="embla__controls">

                <div className="embla__dots">
                    {scrollSnaps.map((_: any, index: any) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
