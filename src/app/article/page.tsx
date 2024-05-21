import ArticlePage from "@/pages/article/article"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Article",
  description: "Stay ahead in the tech world with our comprehensive guide to the newest trends and breakthroughs. From cutting-edge gadgets and innovative software to emerging technologies and industry insights, our platform provides up-to-date information and expert analysis. Whether you're a tech enthusiast, a professional, or simply curious, find all you need to know about the latest advancements in technology here. Explore articles, reviews, and news that keep you informed and inspired.",
  keywords: "Lumosites blog, web development articles, web design tips, SEO strategies, responsive web design, e-commerce insights, digital marketing, latest tech trends, website optimization, user experience best practices"
}


export default function Article() {
  return (
    <ArticlePage />
  )
}
