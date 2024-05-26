import StatsCounter from '@/components/atoms/stats-counter';
import { CountData } from '@/data/CountData';

export const CountContainer = () => {
  return (
    <div className='flex flex-wrap lg:flex-nowrap relative z-[1000] h-max justify-center gap-[180px] mt-0 mb-56'>
      {
        CountData.map((data: any) =>
          <StatsCounter
            key={data.title}
            statObjects={[
              {
                value: data.value,
                suffix: data.suffix,
                title: data.title
              },
            ]}
          />)
      }
    </div>
  )
}