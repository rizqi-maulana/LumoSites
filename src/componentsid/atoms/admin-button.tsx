"use client"
import { useState } from "react";
import { UploadBanner } from "../patterns/UploadBanner";

export const AdminButton = () => {
    const [ShowUpload, setShowUpload] = useState(false);
    return (
        <>
            {
                ShowUpload &&
                <UploadBanner closeModal={setShowUpload} />
            }
            <button className="p-3 bg-red-500 rounded-[5px] text-white mt-5" onClick={() => setShowUpload(true)}> Upload Banner</button>
        </>
    );
};
