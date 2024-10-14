import MainPage from "@/pages/main/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Lumosites - Website Creation Services"
    },
    description: "lumosites is a site that provides website creation services with our team who are experienced in design who will create attractive designs and our team will present websites that can be used easily and efficiently.",
    keywords: "Lumosites, website development, custom websites, web design, responsive websites, SEO-friendly websites, e-commerce solutions, professional web development, online presence, web development services, Lumosites web design, Lumosites services, business websites, corporate websites, personal blogs, website optimization, user experience, digital solutions, creative web design, modern websites, bespoke websites, Lombok website creation services, jasa pembuatan website lombok, Mataram website creation services, jasa pembuatan website mataram",
    openGraph: {
        type: "website",
        title: "LumoSites",
        url: "https://lumosites.com/",
        images: "https://cdn.discordapp.com/attachments/1234481627963330591/1250362142012473405/3.png?ex=666aa9fd&is=6669587d&hm=1d9b875ee56a4366d84bd7a575d4d2f3db020ad94e54d19c65ac912530ff2bd4&",
        description: "Lumosites is a site that provides website creation services with our team who have the same vision in creating websites that are attractive, easy to use and efficient. We know how a website is very important in a business, therefore we will provide our best service and will provide satisfactory results which will definitely benefit your business. We will help you through our attractive, responsive and efficient website design."
    }
}
export default function Main() {
    return (
        <>
            <MainPage />
        </>
    )
}