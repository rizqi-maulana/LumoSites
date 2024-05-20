"use client"

import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Meteors } from "./Meteors";
import { Buttons } from "../atoms/buttons";

import { Translate } from "./Translator";


interface ServicesType {
  title: string
  description: string,
  description_id: string,
  key: number,
  href: string

}

export const ServicesItem = ({ title, description, key, href, description_id }: ServicesType) => {
  return (
    <Link key={key} href={href}>
      <div className=" w-full relative max-w-xs mb-6 group">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#6C9BFF] to-white transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-white border border-gray-800 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 mx-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-[#1B325B]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>

          <h1 className="font-bold text-lg md:text-xl text-[#1B325B] mb-4 mx-4 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-sm md:text-base bg-white text-slate-500 mb-4 px-4 relative z-50">
            
            <Translate to={description_id}>{description}</Translate>
          </p>

          <Buttons className="!border group-hover:bg-[#1B325B] group-hover:!text-white !px-4 !mx-4 !py-1 !rounded-lg !from-transparent !to-transparent  border-gray-500 !text-[#1B325B] hover:bg-[#1B325B] hover:!text-white transition-all duration-300" type="button">Explore</Buttons>
          <Meteors number={20} />
        </div>
      </div>
    </Link>
  );
};