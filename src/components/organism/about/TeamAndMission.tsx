import { TeamCard } from "@/components/patterns/TeamCard"
import { TeamData } from "@/data/TeamData"
import clsx from "clsx"
import { Translate } from "@/components/patterns/Translator"

export const TeamAndMission = ({ isVisible2 }: { isVisible2: boolean }) => {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row justify-evenly lg:pt-[150px] pt-14 mt-[150px] pb-[150px]" id="team">
      <div className="flex flex-col gap-4">
        <h3 className="w-full text-xl md:text-3xl lg:text-5xl lg:mb-10 font-bold text-[#1B325B] dark:text-white lg:px-0 px-[7%]"><Translate to="Team kami">Our team</Translate></h3>
        <div className="lg:w-[550px] flex gap-4 overflow-x-scroll xl:overflow-hidden lg:flex-wrap flex-nowrap px-10 lg:px-0">
          {
            TeamData.map((data: any) => <TeamCard key={data.name} image={data.image} title={data.title} name={data.name} animateDelay={data.delay} />)
          }
        </div>
      </div>
      <div className="lg:w-[400px] text-base md:text-lg lg:mb-0 mb-16 lg:px-0 px-[7%] ">
        <h3 className="font-semibold mb-2 text-[#1B325B] dark:text-[#407FFF]"><Translate to="Misi kami">Our mission</Translate></h3>

        <div className='h-max overflow-hidden'>
          <ul className={clsx('lg:w-[440px] misi text-sm md:text-base text-[#303232] dark:text-white text-[16px] flex flex-col gap-3 animate__animated animate__fast', {
            'animate__fadeInUp': isVisible2
          })}>
            <li>1. <Translate to="Menyediakan desain web unik untuk memenuhi kebutuhan setiap klien.">Provide unique web designs to suit each client&apos;s needs.</Translate> </li>
            <li>2. <Translate to="Menyediakan layanan pengembangan web berkualitas tinggi yang fokus pada kecepatan, keamanan, dan daya tanggap.">Provide high-quality web development services that focus on speed, security and responsiveness.</Translate> </li>
            <li>3. <Translate to="Menyediakan desain web unik untuk memenuhi kebutuhan setiap klien.">Increase customer satisfaction by carrying out clear communication, close cooperation, and providing the best after-sales service.</Translate> </li>
            <li>4. <Translate to="Jadilah orang pertama yang memanfaatkan teknologi terkini dalam membuat dan mengelola website.">Be the first to utilize the latest technology in creating and managing websites.</Translate> </li>
          </ul>
        </div>
        <div className="mt-[60px] h-[0.5px] opacity-100 bg-black dark:bg-white w-[100px]" />
      </div>
    </section>
  )
}
