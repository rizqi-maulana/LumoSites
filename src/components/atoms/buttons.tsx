"use client"

import clsx from "clsx"
import { useRouter } from "next/navigation"
interface Proto { className?: string, href?: string, children: string, type: 'submit' | 'button', disabled?: true | false }

export const Buttons = ({ children, className, href, type, disabled }: Proto) => {
    const router = useRouter()
    return (
        <button type={type} disabled={disabled} className={clsx(`bg-gradient-to-r from-[#7CA8FD] to-[#F38C8F] w-max h-max text-[13px] md:text-base font-medium py-2 px-3 md:py-3 md:px-7 rounded-[5px] text-white ${className}`, { 'cursor-not-allowed': disabled === true })} onClick={() => href ? router.push(`${href}`) : null}>{children}</button>
    )
}