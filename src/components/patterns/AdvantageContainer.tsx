import { AvantageItems } from "./AdvantageItems";
import { AvantageData } from "@/data/AvantageData";

const AdvantageContainer = () => {
  return (
    <div className="flex flex-wrap gap-10 overflow-hidden md:overflow-visible">
      <AvantageItems items={AvantageData} />
    </div>
  )
}

export default AdvantageContainer