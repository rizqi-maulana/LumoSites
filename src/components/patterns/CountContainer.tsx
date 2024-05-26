import StatsCounter from '@/components/atoms/stats-counter';
import { CountData } from '@/data/CountData';

export const CountContainer = () => {
  return (
    <div className='flex h-max mb-52 justify-center gap-10'>
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