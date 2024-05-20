import clsx from "clsx"

interface PropType {
    description: string,
    background?: boolean,
    className?: string
}

export const DescriptioneAbout = ({ description, background, className }: PropType) => {
    return (
        <p className={clsx(`lg:text-base text-[13px] lg:w-[50%] mt-3 lg:mt-2 ${className}`, {
            'text-white': background
        })}>{description}</p>
    )
}