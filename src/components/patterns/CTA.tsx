import Image from "next/image"
import { Buttons } from "../atoms/buttons"
import team from '@/assets/images/jung.jpg'
import CursorTail from "./CursorTail"
import { Translate } from "./Translator"


const CTA = () => {
  return (
    <CursorTail>
      <div className="bg-[#1B2538] w-full lg:h-[700px] h-max lg:flex block justify-evenly items-center py-10 lg:px-0 px-10 relative">
        <div>
          <div className='text-3xl lg:text-6xl font-semibold lg:w-[700px] w-full'>

            <h2 className="text-white" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to="Mulailah Membangun">Start Building Your</Translate></h2>
            <h2 className="text-[#6C9BFF] mt-4" style={{ fontFamily: "Poppins", fontWeight: "bold" }}><Translate to="Situs Impian Sekarang!">Dream Website Now!</Translate></h2>
          </div>
          <p className="mt-10 mb-10 lg:w-[600px] w-full text-sm lg:text-base text-white"><Translate to="Berkomitmen untuk memberikan solusi yang efektif dan menarik untuk kebutuhan Anda. Mari berkolaborasi untuk mewujudkan visi Anda dengan kreativitas dan profesionalisme yang kami tawarkan.">Committed to providing effective and engaging solutions for your needs. Let&apos;s collaborate to bring your vision to life with the creativity and professionalism we offer.</Translate></p>
          <Buttons type="button" className="!from-[#6C9BFF] !to-[#6C9BFF] z-[100] relative"><Translate to="Begin Your Journey">Begin Your Journey</Translate></Buttons>
        </div>
        <Image src={team} width={200} height={200} alt="team" className="lg:block hidden" />
      </div>
    </CursorTail>
  )
}

export default CTA