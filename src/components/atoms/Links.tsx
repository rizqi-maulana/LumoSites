"use client"

import Link from "next/link"
import { useEffect } from "react"

interface ProtoType {
    className?: string,
    href: string,
    children?: any,
    style?: object,
    setMenu?: any,
}

export const Links = ({ href, className = "", children, style, setMenu }: ProtoType) => {
    return (
        <Link href={href} className={className} onClick={() => setMenu !== undefined ? setMenu(false) : null} style={style}>{children}</Link>
        // <Link href={href} className={className}>{children}</Link>
    )
}