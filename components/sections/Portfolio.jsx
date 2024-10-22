"use client";
import React from "react";
import ReadMoreButton from "../ReadMoreButton";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Portfolio() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isRTL = locale === 'fa';

  return (
    <div className={`min-h-screen flex justify-between lg:px-5 lg:flex-col lg:justify-center md:px-5 md:flex-col items-center px-32 sm:flex-col-reverse sm:py-10 overflow-hidden bg-black -z-10`}>
      <div className={`relative items-start w-1/2 max-h-64 lg:w-full md:w-full sm:w-full md:justify-center`}>
        <p className="text-lg text-[#F99D1C] font-bold uppercase">{t('portfolio.title')}</p>
        <p className={`text-white text-wrap text-[0.9rem] leading-6 h-[10rem]`}>
          {t('portfolio.desc')}
        </p>
        <Link href="/portfolio">
          <ReadMoreButton title={t('portfolio.more_works')} top="top-[500000rem]" />
        </Link>
      </div>

      <div className={`flex ${isRTL ? 'mr-auto' : ''} lg:flex-row lg:w-full lg:justify-center sm:flex-col md:flex-col sm:mt-14`}>
        <div className={`flex justify-end items-center float-right md:flex-col md:mx-auto`}>
          <img
            src="https://s32.picofile.com/file/8479218726/pback.png"
            className="w-[80%] rounded-md md:w-full sm:mb-20"
            alt="Portfolio image"
          />
        </div>
      </div>
    </div>
  );
}
