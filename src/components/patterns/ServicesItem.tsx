"use client"

import Link from "next/link";
import { Meteors } from "./Meteors";
import { Buttons } from "../atoms/buttons";

import { Translate } from "./Translator";


interface ServicesType {
  title: string
  description: string,
  description_id: string,
  href: string

}

export const ServicesItem = ({ title, description, href, description_id }: ServicesType) => {
  return (
    <Link href={href}>
      <div className=" w-full relative max-w-xs mb-6 group hover:scale-105 transition-all duration-500">
        <div className="absolute inset-0 h-full w-full group-hover:bg-gradient-to-r from-[#6C9BFF] to-white transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-white dark:bg-gray-900 group-hover:bg-[#1B2538] border border-gray-800 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 mx-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-[#1B325B] dark:text-white group-hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-lg md:text-xl text-[#1B325B] dark:text-white group-hover:text-white mb-4 mx-4 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-sm md:text-base bg-white dark:bg-transparent group-hover:bg-[#1B2538] text-slate-500 group-hover:text-white mb-4 px-4 relative z-50">
            <Translate to={description_id.slice(0, 100)}>{description.slice(0, 100)}</Translate>
          </p>

          <Buttons className="!border group-hover:bg-white group-hover:!text-[#1B2538] !px-4 !mx-4 !py-1 !rounded-lg !from-transparent !to-transparent  border-gray-500 dark:border-white !text-[#1B325B] dark:!text-white transition-all duration-300" type="button"><Translate to="Pelajari Lebih Lanjut">Read More</Translate></Buttons>
          {
            <div className="invisible group-hover:visible">
              <Meteors number={20} />
            </div>
          }
        </div>
      </div>
    </Link>
  );
};