import Services from '@/components/organism/main/services/services';
import '@/assets/css/embla.css'
import FAQ from '@/components/organism/main/faq/faq';
import { MainContent } from '@/components/patterns/MainContent';
import { Banner } from '@/components/patterns/Banner';
import Advantage from '@/components/organism/main/advantage/advantage';
const MainPage = () => {
    return (
        <>
            <MainContent />
            {/* <Banner /> */}
            <Advantage />
            <Services />
            <FAQ />
        </>
    )
}

export default MainPage;