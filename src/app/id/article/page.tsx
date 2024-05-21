import ArticlePage from "@/pages/article/article"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Article",
  description: "Tetap unggul dalam dunia teknologi dengan panduan komprehensif kami tentang tren dan terobosan terbaru. Dari gadget mutakhir dan perangkat lunak inovatif hingga teknologi yang sedang berkembang dan wawasan industri, platform kami menyediakan informasi terkini dan analisis ahli. Apakah Anda seorang penggemar teknologi, profesional, atau sekadar penasaran, temukan semua yang perlu Anda ketahui tentang kemajuan terbaru dalam teknologi di sini. Jelajahi artikel, ulasan, dan berita yang membuat Anda tetap terinformasi dan terinspirasi.",
  keywords: "blog Lumosites, artikel pengembangan web, tips desain web, strategi SEO, desain web responsif, wawasan e-commerce, pemasaran digital, tren teknologi terbaru, optimasi website, praktik terbaik pengalaman pengguna"
}


export default function Article() {
  return (
    <ArticlePage />
  )
}
