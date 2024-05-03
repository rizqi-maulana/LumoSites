"use client"

import clsx from "clsx";
import { useState } from "react";

type ProType = {
    title: string,
    description: string
}

export const FaqCard = ({ title, description }: ProType) => {
    const [ShowFaq, setShowFaq] = useState<boolean>(false);
    return (
        <div>
            <button className="border-[1px] border-solid rounded-[5px] border-black p-3 w-full text-left font-semibold mb-3 text-sm md:text-base " onClick={() => setShowFaq(!ShowFaq)}>{title}
                <p className={clsx('text-[12px] md:text-base overflow-hidden font-normal', {
                    'max-h-0': !ShowFaq,
                    'max-h-[1000px] mt-2': ShowFaq
                })}>
                    {description}
                </p>
            </button>
        </div>
    );
};