import { useRef, useEffect, useState } from "react"
import Image from "next/image";
import { AllBanners } from "../atoms/AllBanners";
import { v4 as uuidv4 } from 'uuid'
import { lineWobble } from 'ldrs'
import { Buttons } from "../atoms/buttons";
import clsx from "clsx";

export const UploadBanner = ({ closeModal }: any) => {
    const [SelectedImage, setSelectedImage] = useState<string>();
    const [SelectedFile, setSelectedFile] = useState<File | undefined>()
    const [Uploaded, setUploaded] = useState<boolean>(false)
    const outside = useRef(null)

    const handleImageUpload = async (event: any) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        setSelectedFile(file)
        reader.onloadend = () => {
            const imageDataUrl: any = reader.result;
            setSelectedImage(imageDataUrl);
        };

        reader.readAsDataURL(file);
    };

    const HandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUploaded(true)

        if (SelectedFile) {
            const Uuid = uuidv4()
            const FileName: string = `banner_${Uuid}`
            const formdata = new FormData();
            formdata.append("ImageFile", SelectedFile)
            formdata.append("FileName", FileName)
            const response = await fetch('/api/post-banner', {
                method: 'POST',
                body: formdata
            });
            const data = await response.json();

            if (data.status === 'success') await BannerUrl(FileName)
        } else {
            console.error("Tidak ada file yang dipilih!");
        }
    };

    const BannerUrl = async (FileName: string) => {
        const response = await fetch('/api/banner-url', {
            method: 'POST',
            body: JSON.stringify({ FileName }),
        });
        const data = await response.json();
        if (data.status === 'success') {
            await UploadData(data.publicUrl, FileName)
        }
    }

    const UploadData = async (BannerLink: string, FileName: string) => {
        const response = await fetch('/api/add-data', {
            method: 'POST',
            body: JSON.stringify({ BannerLink, FileName }),
        });
        const data = await response.json();
        if (data.status === 'success') {
            await closeModal(false)
        }
    }


    useEffect(() => {
        document.addEventListener('click', (e) => {
            if (e.target === outside.current) {
                closeModal(false)
            }
        })
        if (typeof window !== 'undefined') {
            const lineWobble = require('ldrs').lineWobble;
            lineWobble.register();
        }
        // Cleanup listener saat komponen di-unmount
        return () => {
            document.removeEventListener('click', () => { });
        };
    }, [closeModal])
    return (
        <>

            <div className="w-full h-full bg-white/30 flex justify-center items-center fixed z-[1001] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" ref={outside}>
                <div className="h-[500px] bg-white rounded-[5px] p-2 md:p-5 md:grid place-items-center overflow-auto">
                    <AllBanners />
                    {
                        SelectedImage && <div className="w-max h-max relative">
                            <h3 className="font-bold text-sm mb-1">Selected Image:</h3>
                            <Image src={SelectedImage} alt="Selected Image" width={400} height={400} className="mb-2" />
                        </div>
                    }
                    <form onSubmit={HandleSubmit} className="w-[500px] h-max text-white md:grid place-items-center">
                        <input type="file" id="uploadbanner" hidden accept="image/*" onChange={handleImageUpload} />
                        <label htmlFor="uploadbanner" className={clsx('px-5 py-2 h-max w-max rounded-[5px] bg-red-400', {
                            'mb-3': Uploaded
                        })}>Select Banner</label>
                        {
                            Uploaded ?
                                <l-line-wobble
                                    size="80"
                                    stroke="5"
                                    bg-opacity="0.1"
                                    speed="1.75"
                                    color="black"
                                ></l-line-wobble> :
                                <Buttons type="submit" className="mt-3">Upload</Buttons>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}