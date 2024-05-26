import Services from '@/components/organism/main/services/services';
import '@/assets/css/embla.css'
import FAQ from '@/components/organism/faq/faq';
import { MainContent } from '@/components/patterns/MainContent';
import { Banner } from '@/components/patterns/Banner';
import Advantage from '@/components/organism/main/advantage/advantage';
import CTA from '@/components/patterns/CTA';
import AutoScrollingTestimonials from '@/components/patterns/Testimonials';
import { CountContainer } from '@/components/patterns/CountContainer';
const MainPage = () => {
    return (
        <>
            <MainContent />
            {/* <Banner /> */}
            <CountContainer />
            <Advantage />
            <Services />
            <AutoScrollingTestimonials />
            <FAQ href="main" />
            <CTA />
        </>
    )
}

export default MainPage;