import Image from "next/image"
import { Buttons } from "../atoms/buttons"
import team from '@/assets/images/jung.jpg'
import CursorTail from "./CursorTail"

const CTA = () => {
  return (
    <CursorTail>
      <div className="bg-[#1B2538] w-full lg:h-[700px] h-max lg:flex block justify-evenly items-center py-10 lg:px-0 px-10 relative">
        <div>
          <div className='text-3xl lg:text-6xl font-semibold lg:w-[700px] w-full'>
            <h2 className="text-white">Start Building Your</h2>
            <h2 className="text-[#6C9BFF] mt-4">Dream Website Now!</h2>
          </div>
          <p className="mt-10 mb-10 lg:w-[600px] w-full text-sm lg:text-base text-white">Committed to providing effective and engaging solutions for your needs. Let's collaborate to bring your vision to life with the creativity and professionalism we offer.</p>
          <Buttons type="button" className="!from-[#6C9BFF] !to-[#6C9BFF] z-[100] relative">Begin Your Journey</Buttons>
        </div>
        <Image src={team} width={200} height={200} alt="team" className="lg:block hidden" />
      </div>
    </CursorTail>
  )
}

export default CTA