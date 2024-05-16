interface PlanCardHeaderType {
  plan: string,
  price: string,
  desc: string,
  isPopuler: boolean,
}

export const PlanCardHeader = ({ plan, price, desc, isPopuler }: PlanCardHeaderType) => {
  return (
    <div className="relative top-0 w-full h-fulls flex flex-col mb-4">
      <div className="w-full flex flex-row justify-between">
        <h1 className="text-black font-bold">{plan}</h1>
        {isPopuler && <div className="bg-gray-200 text-[12px] font-semibold py-1 px-2 rounded-lg">Most popular</div>}
      </div>
      <div className="flex mt-8 font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-200 text-transparent bg-clip-text">
        <p className="mr-2 text-lg relative -top-2 bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-200 text-transparent bg-clip-text">Rp</p>
        <h3 className="text-3xl ">{price}</h3>
      </div>
      <p className="text-xs my-3">{desc}</p>
    </div>
  )
}