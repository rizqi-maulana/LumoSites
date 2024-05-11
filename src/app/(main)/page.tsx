import MainPage from "@/pages/main/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Lumosites is your trusted companion for building and maintaining websites. From creation to upkeep, we're here to make your online presence easy and impressive."
}
export default function Main() {
    return (
        <>
            <MainPage />
        </>
    )
}