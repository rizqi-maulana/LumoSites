import Services from '@/componentsid/organism/main/services/services';
import '@/assets/css/embla.css'
import FAQ from '@/componentsid/organism/faq/faq';
import { MainContent } from '@/componentsid/patterns/MainContent';
import { Banner } from '@/componentsid/patterns/Banner';
import Advantage from '@/componentsid/organism/main/advantage/advantage';
import CTA from '@/componentsid/patterns/CTA';
const MainPage = () => {
    return (
        <>
            <MainContent />
            {/* <Banner /> */}
            <Advantage />
            <Services />
            <FAQ href="main" />
            <CTA />
        </>
    )
}

export default MainPage;