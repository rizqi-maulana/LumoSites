import { ServicesContainer } from "@/components/patterns/ServicesContainer"

function Services() {
    return (
        <section className="w-full flex items-center justify-center flex-col relative">
            <div className='flex justify-center relative -top-6'>
                <h2 className="bg-[#6C9BFF] text-white text-center w-max font-semibold px-10 py-4 text-4xl">SERVICES</h2>
            </div>
            <ServicesContainer />
        </section>
    )
}

export default Services