import { FaCircleChevronRight } from "react-icons/fa6";

export const LearnMore = ({ className }: { className?: string }) => {
  return (
    <div className={`flex h-10 items-center border-solid border-[#6C9BFF] border-[2px] w-max rounded-full mb-5 relative ${className}`}>
      <FaCircleChevronRight className='text-[#6C9BFF] w-10 h-10 absolute left-0' />
      <h3 className='text-base font-normal mx-3 ml-14'>Learn & view more about us</h3>
    </div>
  )
}