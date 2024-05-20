import { IoMdCheckmark } from "react-icons/io";
export const Checked = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center mt-1">
            <IoMdCheckmark />
            <p className="ml-1 text-xs md:text-sm ">{title}</p>
        </div>
    )
}