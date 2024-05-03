import { Header } from "@/components/patterns/header"
import { BenefitWeb } from "@/components/atoms/BenefitWeb"
import { Buttons } from "@/components/atoms/buttons"
import { LearnHeader } from "@/components/patterns/LearnHeader"
import { Footer } from "@/components/patterns/footer"

interface DynamicRoute {
    params: { itemname: string }
}

export default function LearnItem({ params }: DynamicRoute) {
    return (
        <section>
            <Header />
            <LearnHeader title={params.itemname} />
            <BenefitWeb />
            <Buttons type="button" className="ml-3 md:ml-32" href="">Get Started</Buttons>
            <Footer />
        </section>
    )
}