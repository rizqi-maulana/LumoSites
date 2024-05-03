import { FAQMain } from "@/components/patterns/FAQMain";

const FAQ = () => {
    return (
        <section className="w-full px-2 md:px-32 bg-[#E9F1FB] py-16 md:py-24">
            <div className='text-2xl md:text-5xl font-semibold mb-16 md:mb-28'>
                <h1 className="text-[#1B325B]">Frequently asked</h1>
                <h1 className="text-[#1B325B] mt-0 md:mt-5">questions <span className="text-[#6C9BFF]">(FAQ)</span>.</h1>
            </div>
            <FAQMain />
        </section>
    )
}

export default FAQ;