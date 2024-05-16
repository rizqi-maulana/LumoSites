import { Checked } from "../atoms/checked"

interface CheckContainerType {
  title: any
}

export const CheckContainer = ({ title }: CheckContainerType) => {
  return (
    <div className="h-full w-full">
      {title.map((data: any) => <Checked key={data} title={data} />)}
    </div>
  )
}