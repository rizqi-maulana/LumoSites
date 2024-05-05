import { Buttons } from "../atoms/buttons"
import InstagramImg from '@/assets/images/instagram-1-svgrepo-com.svg'
import xImg from '@/assets/images/x.png'
import facebookImg from '@/assets/images/facebook.png'
import Image from "next/image"
import { Links } from '../atoms/Links'

export const Footer = () => {
    return (
        <footer className="md:pt-32 pt-10 mb-10 px-2 md:px-32 w-full bg-[#F7FCFD]">
            <div className="lg:flex block justify-between mb-14">
                <div className="text-[#1B325B] lg:p-0 p-3">
                    <h3 className="text-xl md:text-2xl font-medium mb-3">LumoSites</h3>
                    <p className="text-base md:w-[400px] md:mb-[35px] mb-5">We provide tailored website development services with a professional </p>
                    <Buttons href="/contact" type="button">Contact us</Buttons>
                </div>
                <div className="flex flex-wrap gap-2 md:w-[500px]">
                    <div className="p-3">
                        <h3 className="font-bold mb-1">Perusahaan</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Links href="#">About</Links></li>
                            <li><Links href="#">Services</Links></li>
                            <li><Links href="#">Contact</Links></li>
                        </ul>
                    </div>
                    <div className="p-3 ml-8">
                        <h3 className="font-bold mb-1">Bantuan</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Links href="#">Trems and conditions</Links></li>
                            <li><Links href="#">Article</Links></li>
                        </ul>
                    </div>
                    <div className="p-3">
                        <h3 className="font-bold mb-2">Kontak</h3>
                        <ul className="flex flex-col gap-2">
                            <li><button className="bg-green-200 px-2">+62 209348 932840</button></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="h-[0.5px] bg-[#1B325B] my-5 md:my-10" />
            <div className="md:flex block justify-between items-center pt-5 pb-10">
                <p className="text-[#1B325B] text-center text-[14px]">Copyright © 2022 - All Rights Reserved</p>
                <div className="font-semibold flex gap-4 pt-4  md:pt-0 justify-center md:justify-between">
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
                    <Image
                        src={xImg}
                        width={50}
                        height={50}
                        alt="x"
                        className="w-8 h-8"
                    />
                </div>
            </div>
        </footer>
    )
}