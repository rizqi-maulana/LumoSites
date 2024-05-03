import { Buttons } from "../atoms/buttons"
import InstagramImg from '@/assets/images/instagram-1-svgrepo-com.svg'
import Image from "next/image"
import { Links } from '../atoms/Links'

export const Footer = () => {
    return (
        <footer className="mt-32 mb-10 px-2 md:px-32 w-full ">
            <div className="md:flex block justify-between mb-14">
                <div className="text-[#1B325B]">
                    <h3 className="text-xl md:text-2xl font-medium mb-3">LumoSites</h3>
                    <p className="text-sm md:text-base">We provide tailored website development services with a professional </p>
                </div>
                <div className="text-sm md:text-base mt-5 md:mt-0">
                    <p>+62 8930 2934 123</p>
                    <p>lumosites@gmail.com</p>
                </div>
            </div>
            <div className="md:flex block justify-between items-end">
                <Buttons href="/contact" type="button">Contact us</Buttons>
                <div className="w-[80%] md:w-[25%] md:text-base text-sm mt-5 flex justify-between">
                    <Links href={'/about'}>About</Links>
                    <Links href="/terms" >Terms and Conditions</Links>
                    <Links href={'/contact'}>Contact</Links>
                </div>
            </div>
            <div className="h-[1px] bg-[#1B325B] my-5 md:my-10" />
            <div className="md:flex block justify-between items-center">
                <p className="text-[#1B325B] text-center md:text-lg text-sm">Copyright © 2022 - All Rights Reserved</p>
                <div className="font-semibold flex justify-between">
                    <Image
                        src={InstagramImg}
                        width={50}
                        height={50}
                        alt="Instagram"
                        className="w-8 h-8"
                    />
                </div>
            </div>
        </footer>
    )
}