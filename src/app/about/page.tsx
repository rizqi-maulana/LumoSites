import AboutPage from "@/pages/about/about";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About",
    description: "lumosites is a site that provides website creation services with our team who have the same vision in creating websites that are attractive, easy to use and efficient.We know how a website is very important in a business, therefore we will provide our best service and will provide satisfactory results which will definitely benefit your business. We will help you through our attractive, responsive and efficient website design.",
    keywords: "About Lumosites, Lumosites team, our mission, web development experts, professional web designers, our story, company values, customer-centric approach, innovation in web design, contact Lumosites"
}
export default function About() {
    return (
        <AboutPage />
    )
}