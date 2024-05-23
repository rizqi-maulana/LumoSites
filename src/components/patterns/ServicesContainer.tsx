import { ServicesItem } from "./ServicesItem"
import { ServicesData } from "@/data/ServicesData"

export const ServicesContainer = () => {

  return (
    <div className="flex md:block flex-wrap md:w-[1350px] columns-1 md:columns-4 gap-5 justify-center mt-10 ">
      {
        ServicesData.map((data: any, index: number) => <ServicesItem key={index} title={data.title} description_id={data.description_id} description={data.description} href={data.href} />)
      }
    </div>
  )
}