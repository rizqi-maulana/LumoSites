
import Activity1 from '@/assets/images/activity1.jpg'
import Activity2 from '@/assets/images/activity2.jpg'
import clsx from "clsx"
import { Translate } from '@/components/patterns/Translator'
import Image from "next/image"
import { usePathname } from 'next/navigation'

export const VisionAndActivity = ({ isVisible }: { isVisible: boolean }) => {
  const pathname = usePathname()
  return (
    <section className="w-full flex flex-col lg:flex-row justify-evenly pt-[150px] px-[7%] lg:px-0">
      <div className="lg:w-[400px] text-base md:text-lg lg:mb-0 mb-16">
        <h3 className="text-[#407FFF] font-semibold mb-2"><Translate to="Visi kami">Our vision</Translate></h3>
        <div className='h-max overflow-hidden'>
          <p className={clsx('lg:w-[440px] text-sm md:text-base text-[#303232] dark:text-white visi animate__animated animate__fast', {
            'animate__fadeInUp': isVisible
          })}>{pathname?.includes('id') ? 'Mendesain website yang menarik dan fungsional adalah pilihan terbaik bagi klien yang ingin meningkatkan kehadiran online pelanggannya dengan inovasi dan kreativitas.' : 'Designing attractive and functional websites is the best choice for clients who want to increase their customers online presence with innovation and creativity.'}</p>
        </div>
        <div className="mt-[160px] h-[0.5px] opacity-100 bg-black dark:bg-white w-[100px]" />
      </div>
      <div className="flex flex-col gap-4 relative">
        <h3 className="w-full float-right opacity-45 lg:block hidden text-[#1B325B] dark:text-white">#activity</h3>
        <Image src={Activity1} alt="Activity1" className="lg:h-auto shadow-2xl lg:w-[300px] h-[170px] relative md:-right-[200px] lg:right-0 md:w-[400px] w-full" />
        <Image src={Activity2} alt="Activity2" className="lg:h-auto shadow-2xl absolute -bottom-14 -left-12 md:left-0 lg:w-[230px] h-[170px] md:w-[400px] w-full" />
      </div>
    </section>
  )
}