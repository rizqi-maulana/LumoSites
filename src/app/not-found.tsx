import Image from "next/image"
import ImageNotFound from '@/assets/images/notFound.svg'

export default function NotFound() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image src={ImageNotFound} width={350} height={350} alt="not found" className="w-[250px] md:w-[350px] max-w-full" />
    </div>
  )
}