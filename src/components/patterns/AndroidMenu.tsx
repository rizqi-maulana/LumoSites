import { Links } from "../atoms/Links"

export const AndroidMenu = () => {
    return (
        <div className="w-full h-max p-3 flex flex-col bg-white shadow-lg fixed top-10 animate__animated animate__fadeInDownBig">
            <Links href="/" >Home</Links>
            <Links className="mt-5" href="/about" >About us</Links>
            <Links className="mt-5" href="/contact" >Contact</Links>
        </div>
    )
}