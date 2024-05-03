import Stars from '@/assets/images/Stars.png'
import Image from "next/image"

export const AboutHeader = () => {
    return (
        <section className="md:flex block items-center justify-between w-full px-3 md:px-32 mt-16 md:mt-0">
            <div className='text-4xl md:text-7xl font-semibold'>
                <h1 className="text-[#1B325B]">What is</h1>
                <h1 className="text-[#6C9BFF] mt-2 md:mt-5">LumoSites<span className="text-[#1B325B]">?</span></h1>
            </div>
            <div className="md:bg-[#6C9BFF] bg-transparent relative md:w-[500px] md:h-[270px] flex justify-center items-center rounded-[15px] mt-3 md:mt-0">
                <div className="md:bg-[#1B2538] bg-transparent md:absolute md:right-[-20px] md:w-[500px] md:h-[200px] rounded-[15px] md:text-white text-black md:p-5 overflow-hidden text-sm">
                    <p>Lumosites is your trusted companion for building and maintaining websites. From creation to
                        upkeep, we&apos;re here to make your online presence easy and impressive.</p>

                    <Image
                        src={Stars}
                        width={200}
                        height={200}
                        alt="Stars"
                        className="float-right mt-5 hidden md:block"
                    />
                </div>
            </div>

        </section>
    )
}