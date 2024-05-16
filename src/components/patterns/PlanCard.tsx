import { PlanCardHeader } from "../atoms/PlanCardHeader"
import { Buttons } from "../atoms/buttons"
import { CheckContainer } from "./CheckContainer"

interface PlanCardType {
  plan: string,
  price: string,
  benefit: string,
  isPopuler: boolean,
  desc: string,
}

export const PlanCard = ({ plan, price, benefit, isPopuler, desc }: PlanCardType) => {

  return (
    <div className={'bg-white rounded-xl w-[370px] px-5 py-6 shadow-2xl'}>
      {/* {
        isPopuler &&
        <div className="w-full py-3 flex items-center rounded-tl-lg rounded-tr-lg justify-center absolute -top-10 bg-[#7CA8FD]">
          <h3 className="text-white text-2xl font-semibold">MOST PICKED</h3>
        </div>
      } */}
      <PlanCardHeader plan={plan} price={price} desc={desc} isPopuler={isPopuler} />
      <button className="w-full bg-[#110820] py-[6px] rounded-md px-1 text-white mb-2">Select</button>
      <CheckContainer title={benefit} />
      {/* <Buttons type="button" className="mb-10 !py-2 !px-10 hidden group-hover:block">Select</Buttons> */}

    </div>
  )
}