"use client"
import React from "react"
import DigitalMarketing from "@/components/sections/DigitalMarketing"
import { useLocale } from "next-intl";

export default function Page() {

    const locale = useLocale();

    const direction = locale === 'fa' ? 'rtl' : 'ltr';
    const textAlign = locale === 'fa' ? 'right' : 'left';

    return (
        <section className="w-full" style={{ direction, textAlign }}>
            <div className=" bg-black pb-20 sm:hidden"></div>
            <DigitalMarketing />
        </section>
    )
}