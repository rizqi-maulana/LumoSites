import MainPage from "@/pages/main/main";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Beranda",
    description: "Lumosites adalah rekan tepercaya Anda untuk membangun dan memelihara situs web. Dari pembuatan hingga pemeliharaan, kami hadir untuk membuat kehadiran online Anda mudah dan mengesankan."
}
export default function Main() {
    return (
        <>
            <MainPage />
        </>
    )
}