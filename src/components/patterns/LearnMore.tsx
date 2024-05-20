import { FaCircleChevronRight } from "react-icons/fa6";
import { Links } from "../atoms/Links";
import { Translate } from "./Translator";

export const LearnMore = ({ className }: { className?: string }) => {
  return (
    <Links href="/about" className={`flex shadow-lg h-10 items-center border-solid border-[#6C9BFF] border-[1px] w-max rounded-full mb-5 relative overflow-hidden ${className} group hover:cursor-pointer`}>
      <FaCircleChevronRight className='text-[#6C9BFF] bg-[#eff9fb] rounded-full w-10 h-10 absolute left-0 group-hover:left-[calc(100%-2.5rem)] transition-all duration-700' />
      <h3 className='text-base font-normal mx-3 ml-14 group-hover:ml-3 group-hover:mr-14 transition-all duration-500'><Translate to="Pelajari & lihat lebih lanjut tentang kami">Learn & view more about us </Translate></h3>
    </Links>
  );
}
