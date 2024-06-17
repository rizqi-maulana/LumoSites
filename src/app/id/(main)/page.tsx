import MainPage from "@/pages/main/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "LumoSites – Mulailah perjalanan onlinemu bersama kami"
    },
    description: "lumosites adalah sebuah situs penyedia jasa pembuatan website dengan tim kami yang berpengalaman dalam desain yang akan menciptakan desain menarik dan tim kami akan menghadirkan website yang dapat digunakan dengan mudah dan efisien.",
    keywords: "Lumosites, pembuatan website, website kustom, desain web, website responsif, website ramah SEO, solusi e-commerce, pengembangan web profesional, kehadiran online, layanan pengembangan web, desain web Lumosites, layanan Lumosites, website bisnis, website perusahaan, blog pribadi, optimasi website, pengalaman pengguna, solusi digital, desain web kreatif, website modern, website sesuai pesanan",
    openGraph: {
        type: "website",
        title: "LumoSites",
        url: "https://lumosites.com/",
        images: "https://cdn.discordapp.com/attachments/1234481627963330591/1250362142012473405/3.png?ex=666aa9fd&is=6669587d&hm=1d9b875ee56a4366d84bd7a575d4d2f3db020ad94e54d19c65ac912530ff2bd4&",
        description: "Lumosites merupakan situs yang menyediakan jasa pembuatan website dengan tim kami yang mempunyai visi yang sama dalam membuat website yang menarik, mudah digunakan dan efisien. Kami tahu betapa pentingnya website dalam sebuah bisnis, oleh karena itu kami akan memberikan pelayanan terbaik kami dan akan memberikan hasil yang memuaskan yang pastinya akan menguntungkan bisnis Anda. Kami akan membantu Anda melalui desain situs web kami yang menarik, responsif, dan efisien."
    }
}
export default function Main() {
    return (
        <>
            <MainPage />
        </>
    )
}