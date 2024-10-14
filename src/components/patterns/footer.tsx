"use client"

import { Buttons } from "../atoms/buttons"

import InstagramImg from '@/assets/images/instagram.svg'
// import xImg from '@/assets/images/twitter.webp'
import facebookImg from '@/assets/images/facebook.svg'
import LogoWhite from '@/assets/images/Logo White.svg'
import LogoDark from '@/assets/images/Logo Dark.svg'
import Image from "next/image"
import { Links } from '../atoms/Links'
import { usePathname } from 'next/navigation'
import { Translate } from "./Translator"

// export const Footer = () => {
//     return (
//         <footer className="lg:pt-20 pt-12 mb-10 px-2 lg:px-32 w-full text-[#1B325B] dark:text-white">
//             <div className="lg:flex block justify-between mb-14">
//                 <div className="lg:p-0 p-3 mb-10 lg:mb-0">
//                     <h3 className="text-xl lg:text-2xl font-medium mb-3">LumoSites</h3>
//                     <p className="text-base lg:w-[400px] lg:mb-[35px] mb-5"><Translate to="Kami menyediakan layanan pengembangan situs web yang disesuaikan dengan profesional">We provide tailored website development services with a professional </Translate></p>
//                     <Buttons href="/contact" type="button"><Translate to="Kontak kami">Contact us</Translate></Buttons>
//                 </div>
//                 <div className="flex flex-wrap gap-2 lg:w-[500px]">
//                     <div className="p-3">
//                         <h3 className="font-bold mb-3"><Translate to="Perusahaan">Company</Translate></h3>
//                         <ul className="flex flex-col gap-5">
//                             <li><Links href="#"><Translate to="Tentang">About</Translate></Links></li>
//                             <li><Links href="#"><Translate to="Layanan">Service</Translate></Links></li>
//                             <li><Links href="/contact"><Translate to="Kontak">Contact</Translate></Links></li>
//                         </ul>
//                     </div>
//                     <div className="p-3 ml-8">
//                         <h3 className="font-bold mb-3"><Translate to="Bantuan">Support</Translate></h3>
//                         <ul className="flex flex-col gap-5">
//                             <li><Links href="/terms"><Translate to="Trem dan kondisi">Trems and conditions</Translate></Links></li>
//                             <li><Links href="/article"><Translate to="Artikel">Article</Translate></Links></li>
//                         </ul>
//                     </div>
//                     <div className="p-3">
//                         <h3 className="font-bold mb-2"><Translate to="Kontak">Contact</Translate></h3>
//                         <ul className="flex flex-col gap-2">
//                             <li><button className="bg-green-200 dark:bg-transparent px-2">+62 209348 932840</button></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//             <div className="h-[0.5px] bg-[#1B325B] my-5 lg:my-10" />
//             <div className="lg:flex block justify-between items-center pt-5 pb-10">
//                 <p className="text-[#1B325B] dark:text-white text-center text-[14px]">Copyright © 2022 - All Rights Reserved</p>
//                 <div className="font-semibold flex gap-4 pt-4  lg:pt-0 justify-center lg:justify-between">
//                     <Image
//                         src={facebookImg}
//                         width={50}
//                         height={50}
//                         alt="facebook"
//                         className="w-8 h-8"
//                     />
//                     <Image
//                         src={InstagramImg}
//                         width={50}
//                         height={50}
//                         alt="Instagram"
//                         className="w-8 h-8"
//                     />
//                 </div>
//             </div>
//         </footer>
//     )
// }

const Footer = () => {
    const pathname = usePathname()
    const footerNavs = [
        {
            label: <Translate to="Perusahaan">Company</Translate>,
            items: [
                {
                    href: `${pathname?.includes('/id') ? '/id/services' : '/services'}`,
                    name: <Translate to="Layanan">Services</Translate>
                },
                {
                    href: `${pathname?.includes('/id') ? '/id/about#team' : '/about#team'}`,
                    name: <Translate to="Tim">Team</Translate>
                },
            ],
        },
        {
            label: <Translate to="Bantuan">Resources</Translate>,
            items: [
                {
                    href: `${pathname?.includes('/id') ? '/id/contact' : '/contact'}`,
                    name: <Translate to="Kontak">Contact</Translate>
                },
                {
                    href: '/#',
                    name: 'Support'
                },
                {
                    href: `${pathname?.includes('/id') ? '/id/article' : '/article'}`,
                    name: <Translate to="Artikel">Article</Translate>
                },
            ],
        },
        {
            label: <Translate to="Tentang">About</Translate>,
            items: [
                {
                    href: '/terms',
                    name: <Translate to="Ketentuan">Terms</Translate>
                },
                {
                    href: `${pathname?.includes('/id') ? '/id/about' : '/about'}`,
                    name: <Translate to="Tentang">About us</Translate>
                },
            ]
        }
    ]

    return (
        <footer className="text-gray-500 bg-white dark:text-white dark:bg-transparent px-4 py-5 w-full mx-auto md:px-28 relative z-10">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs mb-10">
                        {/* <img src="" className="w-32" /> */}
                        <Image src={LogoWhite} width={40} height={40} className="w-40 mb-3 dark:block hidden" alt=" LumoSites" sizes="100vw" />
                        <Image src={LogoDark} width={40} height={40} className="w-40 mb-3 block dark:hidden" alt=" LumoSites" sizes="100vw" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            <Translate to="Kami menyediakan layanan pengembangan situs web yang disesuaikan dengan profesional">We provide tailored website development services with a professional </Translate>
                        </p>
                    </div>
                    <Buttons href={pathname?.includes('/id') ? '/id/contact' : '/contact'} type="button"><Translate to="Kontak kami">Contact us</Translate></Buttons>
                </div>
                <div className="flex-1 mt-10 justify-between flex md:space-y-0 md:mt-0">
                    {
                        footerNavs.map((item, idx) => (
                            <ul
                                className="space-y-4"
                                key={idx}
                            >
                                <h4 className="text-gray-800 dark:text-white font-bold">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <li key={idx}>
                                            <Links
                                                href={el.href}
                                                className="hover:underline hover:text-[#6C9BFF]"

                                            >
                                                {el.name}
                                            </Links>
                                        </li>
                                    )))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2024 LumoSites  All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Links href="#">
                                <svg className="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                    <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                </svg>
                            </Links>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Links href="#">
                                <svg className="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                    <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                </svg>
                            </Links>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Links href="#">
                                <svg className="svg-icon w-6 h-6 text-blue-500" viewBox="0 0 20 20">
                                    <path fill="none" d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"></path>
                                </svg>
                            </Links>
                        </li>

                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <Links href="#">
                                <svg className="svg-icon w-6 h-6 text-red-600" viewBox="0 0 20 20">
                                    <path fill="none" d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"></path>
                                </svg>
                            </Links>
                        </li>
                    </ul>
                </div>
            </div>
            <style>{`
                .svg-icon path,
                .svg-icon polygon,
                .svg-icon rect {
                    fill: currentColor;
                }
            `}</style>
        </footer>
    )
}
export default Footer
