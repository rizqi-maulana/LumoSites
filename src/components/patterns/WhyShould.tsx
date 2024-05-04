
import Image from "next/image"
import InstagramImg from '@/assets/images/instagram-1-svgrepo-com.svg'
import xImg from '@/assets/images/x.png'
import facbookImg from '@/assets/images/facebook.png'

export const WhyShould = () => {
    return (
        <section className="w-full px-3 md:px-32 mt-24 pt-[505px]">
            <div className="w-full flex justify-center gap-5 mt-4">
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