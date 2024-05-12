import { Links } from "../atoms/Links"
import { CiMenuFries } from "react-icons/ci";

interface ProtoType {
    toggle: any,
}


export const AndroidMenu = ({ toggle }: ProtoType) => {
    return (
        <nav className={`w-full font-semibold fixed z-[1001] shadow-2xl left-0 bg-white text-black pr-5 pl-5`}>
            <div className='flex justify-end  items-center h-[30px] pt-4'>
                <button onClick={() => toggle(false)}>
                    < CiMenuFries />
                </button>
            </div>
            <ul className='pb-[25px]'>
                <li className='rounded-lg pt-2 pb-2 pl-5'><Links href="/">Home</Links></li>
                <li className='rounded-lg pt-2 pb-2 pl-5'><Links href="/about">About us</Links></li>
                <li className='rounded-lg pt-2 pb-2 pl-5'><Links href="/contact">Contact</Links></li>
            </ul>
        </nav>
    )
}