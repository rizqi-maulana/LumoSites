import { PlanCardHeader } from "../atoms/PlanCardHeader"
import { Buttons } from "../atoms/buttons"
import { CheckContainer } from "./CheckContainer"

interface PlanCardType {
  plan: string,
  price: string,
  benefit: string,
  isPopuler: boolean
}

export const PlanCard = ({ plan, price, benefit, isPopuler }: PlanCardType) => {

  return (
<<<<<<< HEAD
    <div className={`h-[500px] w-[400px] flex flex-col justify-center items-center bg-white mx-1 mb-10 md:mb-0 relative rounded-lg shadow-md hover:scale-[1.1] hover:shadow-xl hover:z-10 transition-all duration-150 group`}>
      {
        isPopuler &&
        <div className="w-full py-3 flex items-center rounded-tl-lg absolute top-[-35px] rounded-tr-lg justify-center bg-[#7CA8FD]">
=======
    <div className={`h-[500px] w-[90%] lg:w-[400px] flex flex-col justify-center relative items-center bg-white rounded-lg shadow-md hover:scale-[1.1] hover:shadow-xl transition-all duration-150 group hover:z-10`}>
      {
        isPopuler &&
        <div className="w-full py-3 flex items-center rounded-tl-lg rounded-tr-lg justify-center absolute -top-10 bg-[#7CA8FD]">
>>>>>>> 1aaa9877c9c749b151d13f3d832ab79f3249025c
          <h3 className="text-white text-2xl font-semibold">MOST PICKED</h3>
        </div>
      }
      <PlanCardHeader plan={plan} price={price} />
      <CheckContainer title={benefit} />
      <Buttons type="button" className="mb-10 !py-2 !px-10 hidden group-hover:block">Select</Buttons>
    </div>
  )
}