import MainPage from "@/pages/main/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beranda",
    description: "lumosites adalah sebuah situs penyedia jasa pembuatan website dengan tim kami yang berpengalaman dalam desain yang akan menciptakan desain menarik dan tim kami akan menghadirkan website yang dapat digunakan dengan mudah dan efisien.",
    keywords: "Lumosites, pembuatan website, website kustom, desain web, website responsif, website ramah SEO, solusi e-commerce, pengembangan web profesional, kehadiran online, layanan pengembangan web, desain web Lumosites, layanan Lumosites, website bisnis, website perusahaan, blog pribadi, optimasi website, pengalaman pengguna, solusi digital, desain web kreatif, website modern, website sesuai pesanan"
}
export default function Main() {
    return (
        <>
            <MainPage />
        </>
    )
}