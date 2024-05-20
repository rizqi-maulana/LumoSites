import Image from "next/image"
import { useEffect, useState } from "react"
import SuccessCard from "./SuccessCard"

export const AllBanners = () => {
    const [Banners, setBanners] = useState<any[]>([])
    const [showSuccess, setShowSuccess] = useState<boolean>(false)
    const FetchBanner = async () => {
        const response = await fetch('/api/fetch-all-banner')
        const data = await response.json()
        data && await setBanners(data)
    }

    const HandleDelete = async (id: string) => {
        const formdata = new FormData()
        formdata.append('id', id)
        const response = await fetch('/api/delete-banner', {
            method: 'POST',
            body: formdata
        }
        )
        const data = await response.json()
        if (data) {
            await setShowSuccess(true)
            setTimeout(() => {
                setShowSuccess(false)
            }, 2000);
        }
    }

    useEffect(() => {
        FetchBanner()
    }, [showSuccess])

    return (
        <>
            {
                showSuccess && <SuccessCard message="Delete Successful" />
            }
            <h3 className="font-bold text-sm mb-1">Other Banners:</h3>
            {
                Banners.map((banner: any) => (

                    <div className="w-max h-max relative" key={banner.id}>
                        <Image src={banner.banner_link} alt="Selected Image" width={400} height={400} className="mb-2" />
                        <button onClick={() => HandleDelete(banner.id)} className="text-red-500">Delete</button>
                    </div>
                ))
            }
        </>
    )
}