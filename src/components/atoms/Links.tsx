import Link from "next/link"

interface ProtoType {
    className?: string
    href: string
    children: any
}

export const Links = ({ href, className = "", children }: ProtoType) => {
    return (
        <Link href={href} className={className}>{children}</Link>
    )
}