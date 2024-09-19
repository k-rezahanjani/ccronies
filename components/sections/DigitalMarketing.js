'use client'
import Image from 'next/image';
import CardLogo from '../CardLogo';
import { useLocale, useTranslations } from 'next-intl';
import { Montserrat } from 'next/font/google';

const mont = Montserrat({ subsets: ['latin'] });


const DigitalMarketing = () => {
  const t = useTranslations('Hero');
  const clients = t.raw('clients');
  const market = t.raw('marketing');

  const locale = useLocale();
  const isRight = locale === 'fa'; // Check if the locale is Farsi

  // Ensure marketing is an array, even if market is undefined or null
  const marketing = Array.isArray(market) ? market : [];

  const topRowItems = marketing.slice(0, 2);
  const bottomRowItems = marketing.slice(2);

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-black py-10 px-5 -z-40 ${isRight ? '': mont.className}`}>
      <div className={`flex flex-wrap justify-center items-start w-full lg:justify-between ${isRight ? 'flex-row-reverse' : ''}`}>
        {/* Text Section */}
        <div className={`max-w-2xl lg:w-1/2 px-10 md:w-full sm:px-0 ${isRight ? 'text-right' : 'text-left'}`}>
          <h2 className="text-3xl text-[#F99D1C] capitalize mb-4">{t('digital_marketing.title')}</h2>
          <p className="text-[#C9C9C9] leading-6">
            {t('digital_marketing.desc')}
          </p>
        </div>

        {/* Top Row Items */}
        <div className="flex justify-center flex-wrap items-center md:w-full mt-0 sm:flex-col-reverse">
          {topRowItems.map((item) => (
            <div
              className="bg-[#000] w-52 h-52 p-5 m-2 flex flex-col items-center justify-center rounded-lg"
              key={item.id}
            >
              <Image src={item.image} alt={item.name} width={70} height={70} />
              <p className="text-[#C9C9C9] mt-3 capitalize">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row Items */}
      <div className="flex justify-center flex-wrap items-center w-full mt-0">
        {bottomRowItems.map((item) => (
          <div
            className="bg-[#000] w-52 h-52 p-5 m-2 flex flex-col items-center justify-center rounded-lg"
            key={item.id}
          >
            <Image 
              src={item.image} 
              alt={item.name} 
              width={item.name === 'social media design' ? 45 : 70}  
              height={item.name === 'social media design' ? 45 : 70} 
            />
            <p className="text-[#C9C9C9] mt-3 capitalize text-center">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Clients Section */}
      <div className="flex flex-col gap-y-10 bg-black my-20 px-5 w-full">
        <div className="text-center mx-auto">
          <h2 className="text-4xl capitalize sm:text-3xl text-white">
            <span className="text-gray-500">{t('client.some')}</span> {t('client.desc')}
          </h2>
        </div>
        {/* Logo Section */}
        <div className="flex flex-row items-center gap-x-10 overflow-x-scroll scrollbar-none">
          {clients.map((item) => (
            <CardLogo key={item.id} image={item.image} name={item.name} title={item.name} />
          ))}
        </div>
      </div>

      {/* "Let's Talk..." Section */}
      <div className="w-full py-20 px-24 md:px-0 md:py-10">
        <p className={`text-sm text-[#F99D1C] mb-3 capitalize ${isRight ? 'text-right' : 'text-left'} md:text-center`}>
          {t('project.project_title')}
        </p>
        <h2 className={`text-7xl font-extrabold text-white leading-tight md:text-6xl sm:text-5xl sm:leading-tight ${isRight ? 'text-right' : 'text-left'} md:text-center`}>
          {t('talk.title')}
        </h2>
      </div>
    </div>
  );
};

export default DigitalMarketing;
