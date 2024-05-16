import { Buttons } from "../atoms/buttons"

import InstagramImg from '@/assets/images/instagram.svg'
// import xImg from '@/assets/images/twitter.webp'
import facebookImg from '@/assets/images/facebook.svg'
import Image from "next/image"
import { Links } from '../atoms/Links'

export const Footer = () => {
    return (
        <footer className="lg:pt-20 pt-12 mb-10 px-2 lg:px-32 w-full bg-[#F7FCFD]">
            <div className="lg:flex block justify-between mb-14">
                <div className="text-[#1B325B] lg:p-0 p-3 mb-10 lg:mb-0">
                    <h3 className="text-xl lg:text-2xl font-medium mb-3">LumoSites</h3>
                    <p className="text-base lg:w-[400px] lg:mb-[35px] mb-5">We provide tailored website development services with a professional </p>
                    <Buttons href="/contact" type="button">Contact us</Buttons>
                </div>
                <div className="flex flex-wrap gap-2 lg:w-[500px]">
                    <div className="p-3">
                        <h3 className="font-bold mb-3">Company</h3>
                        <ul className="flex flex-col gap-5">
                            <li><Links href="#">About</Links></li>
                            <li><Links href="#">Services</Links></li>
                            <li><Links href="/contact">Contact</Links></li>
                        </ul>
                    </div>
                    <div className="p-3 ml-8">
                        <h3 className="font-bold mb-3">Support</h3>
                        <ul className="flex flex-col gap-5">
                            <li><Links href="/terms">Trems and conditions</Links></li>
                            <li><Links href="/article">Article</Links></li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <h3 className="font-bold mb-2">Contact</h3>
                        <ul className="flex flex-col gap-2">
                            <li><button className="bg-green-200 px-2">+62 209348 932840</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-[0.5px] bg-[#1B325B] my-5 lg:my-10" />
            <div className="lg:flex block justify-between items-center pt-5 pb-10">
                <p className="text-[#1B325B] text-center text-[14px]">Copyright © 2022 - All Rights Reserved</p>
                <div className="font-semibold flex gap-4 pt-4  lg:pt-0 justify-center lg:justify-between">
                    <Image
                        src={facebookImg}
                        width={50}
                        height={50}
                        alt="facebook"
                        className="w-8 h-8"
                    />
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