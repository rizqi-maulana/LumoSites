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
    <div className={`h-[500px] w-[90%] lg:w-[400px] flex flex-col justify-center relative items-center bg-white rounded-lg shadow-md hover:scale-[1.1] hover:shadow-xl transition-all duration-150 group hover:z-10`}>
      {
        isPopuler &&
        <div className="w-full py-3 flex items-center rounded-tl-lg rounded-tr-lg justify-center absolute -top-10 bg-[#7CA8FD]">
          <h3 className="text-white text-2xl font-semibold">MOST PICKED</h3>
        </div>
      }
      <PlanCardHeader plan={plan} price={price} />
      <CheckContainer title={benefit} />
      <Buttons type="button" className="mb-10 !py-2 !px-10 hidden group-hover:block">Select</Buttons>
    </div>
  )
}