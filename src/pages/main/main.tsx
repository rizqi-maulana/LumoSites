import Services from '@/components/organism/main/services/services';
import '@/assets/css/embla.css'
import FAQ from '@/components/organism/main/faq/faq';
import { Footer } from '@/components/patterns/footer';
import { Header } from '@/components/patterns/header';
import { MainContent } from '@/components/patterns/MainContent';
import { Banner } from '@/components/patterns/Banner';
import Advantage from '@/components/organism/main/advantage/advantage';

const MainPage = () => {
    return (
        <>
            <Header />
            <MainContent />
            {/* <Banner /> */}
            <Advantage />
            <Services />
            <FAQ />
            <Footer />
        </>
    )
}

export default MainPage;