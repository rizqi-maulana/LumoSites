"use client"
import { FAQData, FAQDataID } from "@/data/FAQdata";
// import { FaqCard } from "@/components/patterns/FaqCard";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/patterns/FaqCard"

import { usePathname } from "next/navigation";
import { Translate } from "@/components/patterns/Translator";

const FAQ = ({ href }: any) => {

    const FAQs = usePathname()?.includes('/id') ? FAQDataID : FAQData

    return (
        <section className="2xl:w-[1510px] w-[92%] m-auto px-2 mt-[40px] lg:px-32 py-16 lg:py-24 mb-[140px]">
            <div className='text-2xl lg:text-5xl font-semibold mb-16 lg:mb-26'>
                <h1 className="text-[#1B325B] dark:text-white mt-0 lg:mt-5"><span><Translate to="Pertanyaan Yang Sering Diajukan">FAQs</Translate></span>.</h1>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {
                    FAQs.map((data: any) => href === data.href && data.faq.map((item: any, id: number) =>
                        <AccordionItem value={`item-${id}`} key={id}>
                            <AccordionTrigger>{item.title}</AccordionTrigger>
                            <AccordionContent>
                                {item.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </section>
    )
}

export default FAQ;