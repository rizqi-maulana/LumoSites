import Services from '@/components/organism/main/services/services';
import '@/assets/css/embla.css'
import FAQ from '@/components/organism/faq/faq';
import { MainContent } from '@/components/patterns/MainContent';
import Advantage from '@/components/organism/main/advantage/advantage';
import CTA from '@/components/patterns/CTA';
import AutoScrollingTestimonials from '@/components/patterns/Testimonials';
import { CountContainer } from '@/components/patterns/CountContainer';
import { BrandLogo } from '@/components/patterns/BrandLogo';

const MainPage = () => {
    return (
        <>
            <MainContent />
            <CountContainer />
            <BrandLogo />
            <Advantage />
            <Services />
            {/* <AutoScrollingTestimonials /> */}
            <FAQ href="main" />
            <CTA />
        </>
    )
}

export default MainPage;