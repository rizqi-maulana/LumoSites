
"use client"

import { ChevronDownIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { cn } from "@/utils/cn"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import clsx from "clsx";
import { useState } from "react";

import { GrAdd } from "react-icons/gr";

type ProType = {
    title: string,
    description: string
}

// export const FaqCard = ({ title, description }: ProType) => {
//     const [ShowFaq, setShowFaq] = useState<boolean>(false);
//     return (
//         <div>
//             <button className={clsx("border-[1px] border-solid rounded-[5px] w-full text-left font-semibold mb-3 text-sm lg:text-base py-5 px-5 dark:text-white bg-white dark:bg-slate-800", {
//                 'border dark:border-white lg:border-black': ShowFaq
//             })} onClick={() => setShowFaq(!ShowFaq)}>
//                 <div className="flex w-full justify-between">
//                     <h4 className="w-[90%]">{title}</h4>
//                     <GrAdd opacity={0.5} className={clsx('transition-all duration-500', { 'rotate-180': ShowFaq })} />
//                 </div>
//                 <p className={clsx('text-[12px] lg:text-base overflow-hidden font-normal', {
//                     'max-h-0': !ShowFaq,
//                     'max-h-[1000px] mt-4': ShowFaq,
//                 })} style={{ transition: "0.2s ease-in-out" }}>
//                     {description}
//                 </p>
//             </button>
//         </div>
//     );
// };

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn("border-b", className)}
        {...props}
    />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                "flex flex-1 text-left items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
