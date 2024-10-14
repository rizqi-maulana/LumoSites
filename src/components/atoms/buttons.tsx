"use client"

import clsx from "clsx"
import { useRouter } from "next/navigation"
interface Proto { className?: string, href?: string, children: React.ReactNode, type: 'submit' | 'button', disabled?: true | false, onBuy?: () => void }

export const Buttons = ({ children, className, href, type, disabled, onBuy }: Proto) => {
    const router = useRouter()

    const handleClick = () => {
        if (disabled) return;
        if (href) {
            router.push(href)
        } else if (onBuy) {
            onBuy()
        }
    }

    return (
        <button type={type} disabled={disabled} className={clsx(`bg-gradient-to-r dark:to-[#7ca7fd8a] dark:from-[#7CA8FD] from-[#7CA8FD] to-[#F38C8F] w-max h-max text-sm lg:text-base font-medium py-3 px-4 lg:py-3 lg:px-7 rounded-[5px] text-white ${className}`, { 'cursor-not-allowed': disabled === true })} onClick={handleClick}>{children}</button>
    )
}