import Image from "next/image"
import LandingPage from '@/assets/images/Landing_Page.webp'

interface ServivesType {
  title: string,
  description: string,
  image?: string,
  href?: string,
}

export const ServicesItem = ({ title, description, image, href }: ServivesType) => {
  return (
    <div className="p-5 w-[600px] mb-10 border-solid border-red-500  overflow-hidden border-0 hover:border-2 hover:cursor-pointer group">
      <div className="flex items-center relative group-hover:left-[-500px]">
        <Image src={LandingPage} width={100} height={100} alt={title} />
        <div className="ml-5">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  )
}