import { ServicesItem } from "./ServicesItem"
import { ServicesData } from "@/data/ServicesData"

export const ServicesContainer = () => {

  return (
    <div className="w-[1350px] columns-4 gap-5 justify-center mt-10">
      {
        ServicesData.map((data: any, index: number) => <ServicesItem key={index} title={data.title} description={data.description} href={data.href} />)
      }
    </div>
  )
}