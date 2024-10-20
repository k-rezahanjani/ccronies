"use client";
import { Montserrat } from 'next/font/google';
import Image from "next/image";
// import Card from "@/components/Card";
import FoundersList from "@/components/FoundersList";
import { useLocale, useTranslations } from "next-intl";

// const Card = React.lazy(() => import('@/components/Card'));

const mont = Montserrat({ subsets: ['latin'] });


const Page = () => {

  const t = useTranslations('About_Us')
  const locale = useLocale()
  const isRight = locale === 'fa';

  return (
    <div className={`min-h-screen bg-black flex flex-wrap ${isRight ? '' : mont.className}`}>
      {/* Hero section */}
      <div className="flex w-full justify-between">
        <div className={`w-full sm:px-8 py-40 flex items-center lg:px-6 md:px-6 md:py-12 bg-black ${isRight ? 'flex-row-reverse pe-8' : 'ps-32'}`}>
          <div className={`flex flex-col w-1/2 pr-8 md:w-full ${isRight ? 'text-right' : 'text-left'}`} style={isRight ? {direction: 'rtl'} : {}}>
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">{ t('title') }</h2>
            <p className="text-wrap text-lg text-white leading-6 md:text-2xl sm:text-base">
              { t('desc') }
            </p>
          </div>
          <div className={`flex w-1/2 sm:hidden md:hidden ${isRight ? 'justify-start' : 'justify-end'}`}>
            <Image src="https://s32.picofile.com/file/8479194942/Layer_1.png" alt="Hero Image" width={250} height={250} />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col mt-8 px-32 md:px-6 lg:px-6" style={isRight ? {direction: 'rtl'} : {}}>
        <p className={`text-white text-4xl font-bold mb-8 ${isRight ? 'text-right' : 'text-left'}`}>
          <span className="text-[#F99D1C]">{ t('founders_title1') }</span>
          <br />
          { t('founders_title2') }
        </p>
        <FoundersList />
      </div>
      {/* What do we do */}
      <div className="flex flex-wrap w-full justify-between my-20">
        <div className={`w-full sm:px-8 px-32 flex ${isRight ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-center md:px-6 md:flex-col lg:px-6 sm:flex-col-reverse`}>
          <div className="flex flex-col w-1/2 pr-8 md:w-full" style={isRight ? {direction: 'rtl'} : {}}>
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">{ t('what_do_we_do') }</h2>
            <p className="text-wrap text-white leading-6 md:text-2xl sm:text-base">
              { t('what_desc') }
            </p>
          </div>
          <div className={`flex w-1/2 ${isRight ? 'justify-start' : 'justify-end'}`}>
            <Image src="https://biaupload.com/do.php?imgf=org-0644e02cb4791.png" alt="What We Do" width={500} height={500} className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
