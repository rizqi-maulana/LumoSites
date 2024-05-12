interface PlanCardHeaderType {
  plan: string,
  price: string
}

export const PlanCardHeader = ({ plan, price }: PlanCardHeaderType) => {
  return (
    <div className="relative top-0 w-full h-full mt-10 flex items-center flex-col">
      <h1 className="text-3xl font-bold text-[#1B325B]">{plan}</h1>
      <div className="flex font-semibold mt-10">
        <p className="mr-2 text-lg relative -top-2">Rp</p>
        <h3 className="text-4xl ">{price}</h3>
      </div>
    </div>
  )
}