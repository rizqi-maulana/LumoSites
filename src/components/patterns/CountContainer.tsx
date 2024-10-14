import { CountData } from '@/data/CountData';
import NumberTicker from './number-ticker';

export const CountContainer = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap relative z-[80] h-max justify-center gap-[150px] sm:gap-[180px] mt-0 mb-10'>
      {
        CountData.map((data: any, id: number) =>
          <div key={id}>
            <h3 className="text-2xl mb-5 text-[#1B325B] dark:text-white" style={{ fontFamily: "Poppins", fontWeight: "bold" }}>{data.title}</h3>
            <div className="mx-auto flex justify-center gap-y-4">
              <h2>
                <span className='flex tabular-nums text-[#1b335bb7] dark:text-white text-5xl'>
                  <NumberTicker value={data.value} />+
                </span>
              </h2>
            </div>
          </div>
        )}
    </div>
  )
}