import { ServicesContainer } from "@/components/patterns/ServicesContainer"

function Services() {
    return (
        <section className="w-full mt-16 grid place-items-center">
            <div className='text-2xl md:text-5xl font-semibold mb-10 md:mb-28 p-5 ml-2 md:ml-32 bg-[#6C9BFF] w-max'>
                <h1 className="text-white text-4xl">services</h1>
            </div>
            <ServicesContainer />
        </section>
    )
}

export default Services