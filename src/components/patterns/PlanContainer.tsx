import { PlanCard } from "./PlanCard"

interface PlanContainerType {
  href: string
}

const PlanContainer = ({ href }: PlanContainerType) => {

  const PlanData = [
    {
      href: "landingpage",
      plans: [
        {
          populer: false,
          plan: "Basic",
          price: "10.000",
          benefit: ["SEO", "Design"],
        }, {
          populer: true,
          plan: "Standard",
          price: "20.000",
          benefit: ["SEO", "Design"]

        }, {
          populer: false,
          plan: "Premium",
          price: "30.000",
          benefit: ["SEO", "Design"]
        },
      ],
    },
    {
      href: "personal",
      plans: [
        {
          populer: false,
          plan: "Basic",
          price: "10.000",
          benefit: ["SEO", "Design"],
        }, {
          populer: true,
          plan: "Standard",
          price: "20.000",
          benefit: ["SEO", "Design"]

        }, {
          populer: false,
          plan: "Premium",
          price: "30.000",
          benefit: ["SEO", "Design"]
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-36 lg:gap-1">
      {
        PlanData.map((data: any) => href === data.href &&
          <>
            {
              data.plans.map((data: any) => <PlanCard key={data.plan} plan={data.plan} price={data.price} benefit={data.benefit} isPopuler={data.populer} />)
            }
          </>
        )
      }
    </div>
  )
}

export default PlanContainer