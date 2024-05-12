import { ServicesItem } from "./ServicesItem"
import { ServicesData } from "@/data/ServicesData"

export const ServicesContainer = () => {

  return (
    <div className="w-full flex flex-wrap justify-between">
      {ServicesData.map((data: any) =>
        <ServicesItem
          image={data.image}
          key={data.title}
          title={data.title}
          description={data.description}
          href={data.href}
          animateDelay={data.animateDelay}
        />
      )}
    </div>
  )
}