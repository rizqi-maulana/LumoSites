import { PlanCardHeader } from "../atoms/PlanCardHeader"
import { Buttons } from "../atoms/buttons"
import { CheckContainer } from "./CheckContainer"

interface PlanCardType {
  plan: string,
  price: string,
  benefit: string,
  isPopuler: boolean,
  index: number
}

export const PlanCard = ({ plan, price, benefit, isPopuler, index }: PlanCardType) => {

  return (
    <div className={`h-[500px] w-[400px] flex flex-col justify-center items-center bg-white mx-1 mb-10 md:mb-0 relative rounded-lg shadow-md hover:scale-[1.1] hover:shadow-xl hover:z-10 transition-all duration-150 group`}>
      {
        isPopuler &&
        <div className="w-full py-3 flex items-center rounded-tl-lg absolute top-[-35px] rounded-tr-lg justify-center bg-[#7CA8FD]">
          <h3 className="text-white text-2xl font-semibold">MOST PICKED</h3>
        </div>
      }
      <PlanCardHeader plan={plan} price={price} />
      <CheckContainer title={benefit} />
      <Buttons type="button" className="mb-20 hidden group-hover:block">Order Now</Buttons>
    </div>
  )
}