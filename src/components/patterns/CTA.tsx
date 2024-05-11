import Image from "next/image"
import { Buttons } from "../atoms/buttons"
import Starts from '@/assets/images/Stars.webp'
import team from '@/assets/images/jung.jpg'

const CTA = () => {
  return (
    <div className="bg-[#1B2538] w-full md:h-[700px] h-max md:flex block justify-evenly items-center py-10 md:px-0 px-10 relative">
      <div>
        <div className='text-3xl md:text-6xl font-semibold md:w-[700px] w-full'>
          <h2 className="text-white">Start Building Your</h2>
          <h2 className="text-[#6C9BFF] mt-4">Dream Website Now!</h2>
        </div>
        <p className="mt-10 mb-10 md:w-[600px] w-full text-sm md:text-base text-white">Committed to providing effective and engaging solutions for your needs. Let's collaborate to bring your vision to life with the creativity and professionalism we offer.</p>
        <Buttons type="button" className="!from-[#6C9BFF] !to-[#6C9BFF] z-[100] relative">Begin Your Journey</Buttons>
      </div>
      <Image src={team} width={200} height={200} alt="team" className="md:block hidden" />

      {/* stats */}
      <Image src={Starts} width={200} height={200} alt={"stars"} className="absolute right-0 w-40 md:w-[200px]" />
      <Image src={Starts} width={200} height={200} alt={"stars"} className="absolute bottom-0 right-0 w-40 md:w-[200px]" />
      <Image src={Starts} width={200} height={200} alt={"stars"} className="absolute md:right-52 right-40 -bottom-[70px] w-40 md:w-[200px]" />
      <Image src={Starts} width={200} height={200} alt={"stars"} className="absolute md:block hidden right-[430px] -bottom-[70px] w-40 md:w-[200px]" />
      <Image src={Starts} width={200} height={200} alt={"stars"} className="absolute md:left-[700px] left-0 -bottom-[70px] w-40 md:w-[200px]" />
    </div>
  )
}

export default CTA