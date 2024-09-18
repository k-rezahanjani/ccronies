import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center">
            <h1 className="text-[#F99D1C] text-4xl">Sorry! 404</h1>
            <h1 className="text-4xl font-bold text-white text-center">
                The page does not exist!! <Image src="/images/gif/mon.gif" className="mx-auto mt-6" width={200} height={200}/>
            </h1>
        </div>
    )
}