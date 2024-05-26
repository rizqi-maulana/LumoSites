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
    <div className={'bg-white dark:bg-slate-950 rounded-xl w-[80%] md:w-[370px] px-5 py-6 shadow-2xl'}>
      <PlanCardHeader plan={plan} price={price} desc={desc} isPopuler={isPopuler} />
      <Buttons className="!w-full !py-[6px] !from-[#110820 !to-[#110820] dark:!from-white dark:!to-white dark:!text-black rounded-md px-1 text-white mb-2" type="button">Select</Buttons>
      <CheckContainer title={benefit} />
    </div>
  )
}