import { title } from "process"
import { ServicesItem } from "./ServicesItem"
export const ServicesContainer = () => {
  const ServicesData = [
    {
      title: "Landing Page",
      description: "A landing page is a dedicated web page designed for specific marketing purposes, such as collecting contact information or driving conversions. It has a single focus, clear call-to-action, and often offers incentives to visitors. Landing pages are effective tools in digital marketing to achieve specific goals"
    }
  ]
  return (
    <div className="w-full px-3 md:px-32 flex flex-wrap justify-between">

      <ServicesItem title="Landing Page" description="A landing page is a dedicated web page designed for specific marketing purposes, such as collecting contact information or driving conversions. It has a single focus, clear call-to-action, and often offers incentives to visitors. Landing pages are effective tools in digital marketing to achieve specific goals" />
    </div>
  )
}