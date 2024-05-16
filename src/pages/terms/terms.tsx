import { TermsContent } from "@/components/atoms/TermsContent"
import { TermsHeader } from "@/components/atoms/TermsHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms and Conditions"
}
const TermsPage = () => {
    return (
        <>
            <TermsHeader />
            <TermsContent />
        </>
    )
}

export default TermsPage