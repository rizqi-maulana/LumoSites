"use client"

import Image from "next/image"
import { Links } from "@/components/atoms/Links"
import LogoDark from '@/assets/images/Logo Dark.svg'
import LogoWhite from '@/assets/images/Logo White.svg'
import { usePathname } from "next/navigation"

export default function NotFound() {
  const pathname = usePathname()
  return (
    <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div className="max-w-lg mx-auto space-y-3 text-center">
        <div className="flex items-center justify-center">
          <Image src={LogoDark} alt="not found" className="block dark:hidden" width={150} height={150} sizes="100vw" />
          <Image src={LogoWhite} alt="not found" className="hidden dark:block" width={150} height={150} sizes="100vw" />
        </div>
        <p className="text-[#1B325B] dark:text-white text-4xl font-semibold sm:text-5xl">
          Page not found
        </p>
        <p className="text-[#1B325B] dark:text-white">
          Sorry, the page you are looking for could not be found or has been removed.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Links href="/" className="block py-2 px-4 text-white font-medium bg-[#6C9BFF] duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg">
            Go back
          </Links>
          <Links href={pathname?.includes('/id') ? '/id/contact' : '/contact'} className="block py-2 px-4 text-gray-700 dark:text-white hover:bg-gray-50 hover:text-[#1B325B] font-medium duration-150 active:bg-gray-100 border rounded-lg">
            Contact support
          </Links>
        </div>
      </div>
    </div>
  )
}