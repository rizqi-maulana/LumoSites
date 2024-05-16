import AdvantageContainer from "@/components/patterns/AdvantageContainer";

const Advantage = () => {
  return (
    <section className="w-full px-2 md:px-32  bg-[#E9F1FB] py-16 md:py-24">
      <div className='text-2xl md:text-5xl font-semibold mb-16 md:mb-20'>
        <h1 className="text-[#1B325B] mt-0 md:mt-5">Our <span className="text-[#6C9BFF]">Advantage</span>.</h1>
      </div>
      <AdvantageContainer />
    </section>
  )
}

export default Advantage;