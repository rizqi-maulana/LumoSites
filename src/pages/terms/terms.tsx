import { TermsContent } from "@/components/atoms/TermsContent"
import { TermsHeader } from "@/components/atoms/TermsHeader"
import { Header } from "@/components/patterns/header"
import { Footer } from "@/components/patterns/footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms and Conditions"
}
const TermsPage = () => {
    return (
        <>
            <Header />
            <TermsHeader />
            <TermsContent />
            <Footer />
        </>
    )
}

export default TermsPage