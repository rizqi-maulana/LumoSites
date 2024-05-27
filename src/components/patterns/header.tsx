"use client"

import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Langmenu } from "./LangMenu";
import { NavbarMenus } from "./NavbarMenu";

import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Translate } from "./Translator";
import { Links } from "../atoms/Links";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [lang, setLang] = useState<string>('')
  const [Darkmode, setDarkmode] = useState<boolean>(false)
  const [ShowHeader, setShowHeader] = useState<boolean>(false)

  const pathname = usePathname()


  useEffect(() => {
    if (typeof window !== 'undefined') {
      var getData = localStorage.getItem("theme") === "dark";
      setDarkmode(getData)
    }
    setTimeout(() => {
      setShowHeader(true)
    }, 200);
  }, [])

  const HandleDarkMode = useCallback(() => {
    if (Darkmode) {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
      setDarkmode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setDarkmode(true)
    }
  }, [Darkmode])

  useEffect(() => {
    if (pathname?.includes('id')) {
      setLang('/id')
    } else {
      setLang('')
    }
  }, [pathname])

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className={clsx('bg-transparent z-[10001] relative -top-[100px] transition-all duration-300', { '!-top-0': ShowHeader })}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">LumoSites</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === `${lang}/`}>
          {/* <Link color="foreground" href="#">
            Features
          </Link> */}
          <Links className={clsx('text-foreground', { '!text-[#6C9BFF]': pathname === `${lang}/` })} href={`${lang}/`} ><Translate to="Beranda">Home</Translate></Links>
        </NavbarItem>
        <NavbarItem>
          <NavbarMenus lang={lang} />
        </NavbarItem>
        <NavbarItem isActive={pathname === `${lang}/about`}>
          {/* <Link href="#" aria-current="page">
            Customers
          </Link> */}
          <Links className={clsx('text-foreground', { '!text-[#6C9BFF]': pathname === `${lang}/about` })} href={`${lang}/about`} ><Translate to="Tentang kami">About us</Translate></Links>

        </NavbarItem>
        <NavbarItem isActive={pathname === `${lang}/contact`}>
          {/* <Link color="foreground" href="#">
            Integrations
          </Link> */}
          <Links className={clsx('text-foreground', { '!text-[#6C9BFF]': pathname === `${lang}/contact` })} href={`${lang}/contact`} ><Translate to="Kontak">Contact</Translate></Links>

        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Langmenu />
        </NavbarItem>
        <NavbarItem>
          <button onClick={() => HandleDarkMode()}>{Darkmode ? <MdOutlineLightMode className="text-2xl" /> : <MdOutlineDarkMode className="text-2xl" />}</button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="z-[1001]">
        {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
        <NavbarMenuItem>
          <Links className={clsx('text-foreground block mt-2', { '!text-[#6C9BFF]': pathname === `${lang}/` })} href={`${lang}/`} ><Translate to="Beranda">Home</Translate></Links>
          <Links className={clsx('text-foreground block mt-2', { '!text-[#6C9BFF]': pathname === `${lang}/about` })} href={`${lang}/about`} ><Translate to="Tentang kami">About us</Translate></Links>
          <Links className={clsx('text-foreground block mt-2', { '!text-[#6C9BFF]': pathname === `${lang}/contact` })} href={`${lang}/contact`} ><Translate to="Kontak">Contact</Translate></Links>
        </NavbarMenuItem>
        <NavbarMenus lang={lang} />
      </NavbarMenu>
    </Navbar>
  );
}
