import { Links } from "../atoms/Links"
import { CiMenuFries } from "react-icons/ci";
import { NavbarMenu } from "./NavbarMenu";
import { Langmenu } from "./LangMenu";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

import { Translate } from "./Translator";

interface ProtoType {
    toggle?: any,
    isActive?: any,
    ChangeTheme?: () => void,
    Darkmode: boolean,
    lang: string
}


export const AndroidMenu = ({ toggle, ChangeTheme, Darkmode, lang }: ProtoType) => {
    return (
        <nav className={`w-full font-semibold fixed z-[1001] shadow-2xl left-0 bg-white dark:bg-slate-900 dark:text-white text-black pr-5 pl-5`}>
            <div className='flex justify-end  items-center h-[30px] pt-4'>
                <button onClick={() => toggle(false)}>
                    < CiMenuFries />
                </button>
            </div>
            <ul className='pb-[25px]'>
                <li className='rounded-lg py-2 pl-5'><Links href={`${lang}/`} setMenu={toggle}><Translate to="Beranda">Home</Translate></Links></li>
                <NavbarMenu toggle={toggle} lang={lang} />
                <li className='rounded-lg py-2 pl-5'><Links href={`${lang}/about`} setMenu={toggle}><Translate to="Tentang kami">About us</Translate></Links></li>
                <li className='rounded-lg py-2 pl-5'><Links href={`${lang}/contact`} setMenu={toggle}><Translate to="Kontak">Contact</Translate></Links></li>
                <div className="flex justify-between">
                    <Langmenu />
                    <button onClick={ChangeTheme}>{Darkmode ? <MdOutlineLightMode className="text-2xl" /> : <MdOutlineDarkMode className="text-2xl" />}</button>
                </div>

            </ul>
        </nav>
    )
}