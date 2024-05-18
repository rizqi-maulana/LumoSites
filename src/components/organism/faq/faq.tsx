import { FAQData } from "@/data/FAQdata";
import { FaqCard } from "@/components/patterns/FaqCard";
const FAQ = ({ href }: any) => {
    return (
        <section className="md:w-full w-[92%] m-auto px-2 mt-[40px] lg:px-32 py-16 lg:py-24 mb-[140px]">
            <div className='text-2xl lg:text-5xl font-semibold mb-16 lg:mb-26'>
                <h1 className="text-[#1B325B] mt-0 lg:mt-5"><span>FAQs</span>.</h1>
            </div>
            {
                FAQData.map((data: any) => href === data.href && data.faq.map((item: any) => <FaqCard key={item.title} title={item.title} description={item.description} />))
            }
        </section>
    )
}

export default FAQ;