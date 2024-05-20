import ArticlePage from "@/pages/article/article"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Article"
}


export default function Article() {
  return (
    <ArticlePage />
  )
}
