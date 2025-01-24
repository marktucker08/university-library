import React from "react";
import Image from "next/image";
import config from "@/lib/config";

const authenicator = async () => {
    try {
        const response = await fetch("http://localhost/3000/api/auth/imagekit");

        if (!response.ok) {
            const errorText = await response.text();

            throw new Error(
                 `Request failed with status: ${response.status}: ${errorText}`,
            );
        }

        const data = await response.json();

        const { signature, expire, token } = data;

        return {token, expire, signature};
    }  catch (error:any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const ImageUpload = () => {
    return (
        <button className="upload-btn">
            <Image src="/icons/upload.svg" alt="upload-icon" width={20} height={20} className="object-contain" />

            <p className="text-base text-light-100">Upload a File</p>

            {/* {file && <p className="upload-filename">{file.filePath}</p>} */}
        </button>
    );
};

export default ImageUpload;