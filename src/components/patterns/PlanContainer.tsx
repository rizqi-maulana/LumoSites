import { PlanCard } from "./PlanCard"
import { PlanData } from "@/data/PlanData"

interface PlanContainerType {
  href: string
}

const PlanContainer = ({ href }: PlanContainerType) => {

  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full gap-36 lg:gap-5">
      {
        PlanData.map((data: any) => href === data.href &&
          <>
            {
              data.plans.map((data: any) => <PlanCard key={data.plan} plan={data.plan} price={data.price} benefit={data.benefit} isPopuler={data.populer} desc={data.desc} />)
            }
          </>
        )
      }
    </div>
  )
}

export default PlanContainer