interface StatsObject {
  value: number;
  suffix?: string;
  title: string
}

interface StatsCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  duration?: number;
  statObjects: StatsObject[];
}