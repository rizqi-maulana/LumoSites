import { AdvantageResponsive } from "./AdvantageResponsive";
import { AdvantageCS } from "./AdvantageCS";
import { AdvantageMainte } from "./AdvantageMainte";
import { AdvantageHightSeo } from "./AdvantageHightSEO";

const AdvantageContainer = () => {
  return (
    <div className="flex flex-wrap gap-10">
      <AdvantageResponsive />
      <AdvantageCS />
      <AdvantageHightSeo />
      <AdvantageMainte />
    </div>
  )
}

export default AdvantageContainer