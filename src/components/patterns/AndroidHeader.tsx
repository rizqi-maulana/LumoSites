import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { AndroidMenu } from "./AndroidMenu";

interface ProtoType {
    ChangeTheme?: () => void
    Darkmode: boolean,
    lang: string
}

export const AndroidHeader = ({ ChangeTheme, Darkmode, lang }: ProtoType) => {
    const [ShowMenu, setShowMenu] = useState<boolean>(false)
    return (
        <>
            <div className={`absolute transition-all duration-300 ${ShowMenu ? 'top-[0px]' : '-top-[300px]'}`}>
                <AndroidMenu toggle={setShowMenu} ChangeTheme={ChangeTheme} Darkmode={Darkmode} lang={lang} isActive={ShowMenu} />
            </div>
            <div className="p-3 w-full flex justify-end pr-[20px] pt-4">
                < CiMenuFries onClick={() => setShowMenu(!ShowMenu)} className="dark:text-white" />

            </div>
        </>
    )
}