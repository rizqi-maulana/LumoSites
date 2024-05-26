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
    <>
      {
        Plans.map((data: any, index: number) => href === data.href &&
          <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center w-full gap-8 lg:gap-5" key={index}>
            <>
              {
                data.plans.map((data: any) => <PlanCard key={data.plan} plan={data.plan} price={data.price} benefit={data.benefit} isPopuler={data.populer} desc={data.desc} />)
              }
            </>
          </div>
        )
      }
    </>
  )
}

export default PlanContainer