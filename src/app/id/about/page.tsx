import AboutPage from "@/pages/about/about";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tentang",
    description: "lumosites adalah sebuah situs penyedia jasa pembuatan website dengan tim kami yang memiliki visi yang sama dalam menciptakan website yang menarik serta mudah digunakan dan juga efisien. kami tahu bagaimana website itu sangat penting dalam sebuah bisnis, oleh karena itu kami akan memberikan layanan terbaik kami dan akan memberikan hasil yang memuaskan juga pastinya menguntungkan bisnis anda. kami akan membantu anda melalui desain website kami yang menarik, responsif, dan juga efisien.",
    keywords: "Tentang Lumosites, tim Lumosites, misi kami, ahli pengembangan web, desainer web profesional, cerita kami, nilai-nilai perusahaan, pendekatan berpusat pada pelanggan, inovasi dalam desain web, hubungi Lumosites"
}
export default function About() {
    return (
        <AboutPage />
    )
}