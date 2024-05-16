import { AdvantageResponsive } from "./AdvantageResponsive";
import { AdvantageCS } from "./AdvantageCS";
import { AdvantageMainte } from "./AdvantageMainte";
import { AdvantageHightSeo } from "./AdvantageHightSEO";

const AdvantageContainer = () => {
  return (

    <div className="flex flex-wrap gap-10 overflow-hidden md:overflow-visible">
      <AdvantageResponsive />
      <AdvantageCS />
      <AdvantageHightSeo />
      <AdvantageMainte />
    </div>
  )
}

export default AdvantageContainer