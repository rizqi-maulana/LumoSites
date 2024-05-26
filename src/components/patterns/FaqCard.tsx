"use client"

import clsx from "clsx";
import { useState } from "react";

import { GrAdd } from "react-icons/gr";

type ProType = {
    title: string,
    description: string
}

export const FaqCard = ({ title, description }: ProType) => {
    const [ShowFaq, setShowFaq] = useState<boolean>(false);
    return (
        <div>
            <button className={clsx("border-[1px] border-solid rounded-[5px] w-full text-left font-semibold mb-3 text-sm lg:text-base py-5 px-5 dark:text-white bg-white dark:bg-slate-800", {
                'border border-white lg:border-black': ShowFaq
            })} onClick={() => setShowFaq(!ShowFaq)}>
                <div className="flex w-full justify-between">
                    <h4 className="w-[90%]">{title}</h4>
                    <GrAdd opacity={0.5} className={clsx('transition-all duration-500', { 'rotate-180': ShowFaq })} />
                </div>
                <p className={clsx('text-[12px] lg:text-base overflow-hidden font-normal', {
                    'max-h-0': !ShowFaq,
                    'max-h-[1000px] mt-4': ShowFaq,
                })} style={{ transition: "0.2s ease-in-out" }}>
                    {description}
                </p>
            </button>
        </div>
    );
};