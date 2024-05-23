"use client"
import { PlanCard } from "./PlanCard"
import { PlanData, PlanDataID } from "@/data/PlanData"

interface PlanContainerType {
  href: string
}

import { usePathname } from "next/navigation"

const PlanContainer = ({ href }: PlanContainerType) => {

  const Plans = usePathname()?.includes('id') ? PlanDataID : PlanData

  return (
    <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full gap-8 lg:gap-5">
      {
        Plans.map((data: any) => href === data.href &&
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