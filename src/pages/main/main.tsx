import Services from '@/components/organism/main/services/services';
import '@/assets/css/embla.css'
import FAQ from '@/components/organism/faq/faq';
import { MainContent } from '@/components/patterns/MainContent';
import { Banner } from '@/components/patterns/Banner';
import Advantage from '@/components/organism/main/advantage/advantage';
import CTA from '@/components/patterns/CTA';
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