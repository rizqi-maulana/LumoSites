import AdvantageContainer from "@/components/patterns/AdvantageContainer";

const Advantage = () => {
  return (
    <section className="w-full px-2 md:px-32 bg-[#E9F1FB]">
      <div className='flex justify-center relative -top-6'>
        <h2 className="bg-[#6C9BFF] text-white shadow-xl border-b-2 border-gray-200 text-center w-max font-semibold px-5 py-3 text-lg md:px-10 md:py-4 md:text-4xl">ADVANTAGES</h2>
      </div>
      <AdvantageContainer />
    </section>
  )
}

export default Advantage;