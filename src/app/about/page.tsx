import AboutPage from "@/pages/about/about";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About"
}
export default function About() {
    return (
        <AboutPage />
    )
}