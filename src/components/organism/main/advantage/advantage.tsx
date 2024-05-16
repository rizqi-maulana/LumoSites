import AdvantageContainer from "@/components/patterns/AdvantageContainer";

const Advantage = () => {
  return (
    <section className="w-full px-2 lg:px-32 bg-[#E9F1FB] py-16 lg:py-24">
      <div className='text-2xl lg:text-5xl font-semibold mb-16 lg:mb-20'>
        <h1 className="text-[#1B325B] mt-0 lg:mt-5">Our <span className="text-[#6C9BFF]">Advantage</span>.</h1>
      </div>
      <AdvantageContainer />
    </section>
  )
}

export default Advantage;