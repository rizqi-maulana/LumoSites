import DetailsPage from "@/pages/details/details"

interface DetailsType {
  params: { services: string }
}

export default function Details({ params }: DetailsType) {
  return (
    <>
      <DetailsPage params={params.services} />
    </>
  )
}