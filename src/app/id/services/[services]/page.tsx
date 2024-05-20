import DetailsPage from "@/pages/services/details"
import { Metadata } from "next"


interface DetailsType {
  params: { services: string }
}

export default function Details({ params }: DetailsType) {
  const metadata: Metadata = {
    title: params.services,
  };
  return (
    <>
      <DetailsPage params={params.services} />
    </>
  )
}

export async function generateMetadata({ params }: DetailsType): Promise<Metadata> {
  return {
    title: params.services,
  };
}