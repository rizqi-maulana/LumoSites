import Image from "next/image";
import CheckedImage from '@/assets/images/check-select.webp'
export const Checked = ({ title }: { title: string }) => {
    return (
        <div className="flex items-center">
            <Image
                src={CheckedImage}
                width={30}
                height={30}
                alt="Checked"
                className="mr-3 w-5 h-5 md:w-8 md:h-8"
            />
            <p>{title}</p>
        </div>
    )
}