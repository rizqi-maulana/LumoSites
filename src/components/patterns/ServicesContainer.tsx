import { ServicesItem } from "./ServicesItem"
import { ServicesData } from "@/data/ServicesData"
import { usePathname } from "next/navigation"

export const ServicesContainer = () => {
  const pathname = usePathname()
  return (
    <div className="mt-10 lg:flex xl:block 2xl:columns-4 xl:columns-3 md:columns-2 flex-wrap justify-center columns-1 gap-5">
      {
        ServicesData.map((data: any, index: number) => <ServicesItem key={index} title={data.title} description_id={data.description_id} description={data.description} href={pathname?.includes('id') ? data.hrefID : data.href} />)
      }
    </div>
  )
}