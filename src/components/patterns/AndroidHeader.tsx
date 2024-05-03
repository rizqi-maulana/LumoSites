import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { AndroidMenu } from "./AndroidMenu";
export const AndroidHeader = () => {
    const [ShowMenu, setShowMenu] = useState<boolean>(false)
    return (
        <>
            {
                ShowMenu && <AndroidMenu />
            }
            <div className="p-3 w-full flex justify-end">
                < CiMenuFries onClick={() => setShowMenu(!ShowMenu)} />
            </div>
        </>
    )
}