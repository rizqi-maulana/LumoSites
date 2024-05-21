import MainPage from "@/pages/main/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "lumosites is a site that provides website creation services with our team who are experienced in design who will create attractive designs and our team will present websites that can be used easily and efficiently.",
    keywords: "Lumosites, website development, custom websites, web design, responsive websites, SEO-friendly websites, e-commerce solutions, professional web development, online presence, web development services, Lumosites web design, Lumosites services, business websites, corporate websites, personal blogs, website optimization, user experience, digital solutions, creative web design, modern websites, bespoke websites",
}
export default function Main() {
    return (
        <>
            <MainPage />
        </>
    )
}