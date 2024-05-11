
import Image from "next/image"
import InstagramImg from '@/assets/images/instagram.webp'
import xImg from '@/assets/images/twitter.webp'
import facbookImg from '@/assets/images/facebook.webp'

export const WhyShould = () => {
    return (
        <section className="w-full px-3 md:px-32 md:mt-24 mt-0 pt-[505px]">
            <div className="w-full flex justify-center gap-5 md:mt-5 mt-0">
                <Image
                    src={facbookImg}
                    width={50}
                    height={50}
                    alt="Instagram"
                    className="w-10 h-10"
                />
                <Image
                    src={InstagramImg}
                    width={50}
                    height={50}
                    alt="Instagram"
                    className="w-8 h-8 mt-1"
                />
                <Image
                    src={xImg}
                    width={50}
                    height={50}
                    alt="Instagram"
                    className="w-8 h-8 mt-1"
                />
            </div>
        </section>
    )
}