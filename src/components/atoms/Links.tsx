import Link from "next/link"

interface ProtoType {
    className?: string,
    href: string,
    children: any,
    style?: object
}

export const Links = ({ href, className = "", children, style }: ProtoType) => {
    return (
        <Link href={href} className={className} style={style}>{children}</Link>
    )
}