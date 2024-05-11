import { ServicesContainer } from "@/components/patterns/ServicesContainer"

function Services() {
    return (
        <section className="w-full mt-16 flex items-center justify-center flex-col pb-10 md:pb-0 px-3 md:px-24">
            <div className='text-2xl md:text-4xl font-semibold mb-10 md:mb-28 p-2 md:p-5 bg-[#6C9BFF] w-max'>
                <h1 className="text-white">services</h1>
            </div>
            <ServicesContainer />
        </section>
    )
}

export default Services