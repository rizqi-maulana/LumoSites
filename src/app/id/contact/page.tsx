import ContactPage from "@/pages/contact/contact"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact"
}

export default function Contact() {
    return (
        <ContactPage />
    )
}