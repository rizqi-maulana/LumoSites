import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { AndroidMenu } from "./AndroidMenu";
export const AndroidHeader = () => {
    const [ShowMenu, setShowMenu] = useState<boolean>(false)
    return (
        <>
            <div className={`absolute transition-all ${ShowMenu ? 'top-[0px]' : 'top-[-230px]'}`}>
                <AndroidMenu toggle={setShowMenu}/>
            </div>
            <div className="p-3 w-full flex justify-end pr-[20px] pt-4">
                < CiMenuFries onClick={() => setShowMenu(!ShowMenu)}/>
            </div>
        </>
    )
}