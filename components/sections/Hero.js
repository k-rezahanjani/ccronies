"use client";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const Player = dynamic(() => import('@lottiefiles/react-lottie-player').then(mod => mod.Player), { ssr: false });

const style = {
  height: 550,
};

const Hero = ({ lang }) => {
  const [isClient, setIsClient] = useState(false);

  const t = useTranslations("Hero");
  // const locale = useLocale();
  // const isRTL = locale === 'fa';

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={`min-h-screen bg-black flex justify-between items-center relative ${lang}`}>
      <div className={`flex flex-wrap w-full justify-between`}>
        <div className={`w-full sm:ps-8 ps-32 `}>
          <motion.div
            className="flex flex-col w-full"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-lg text-[#F99D1C] mb-3">{t('hello')}</p>
            <h2 className="text-[4.5rem] text-white leading-[90px] md:text-6xl sm:text-4xl font-bold">
              {t('we_are')} <br /> {t('we_are2')}
            </h2>
          </motion.div>
        </div>

        {/* Lottie */}
        {isClient && (
          <div className="absolute right-0 top-0 -z-100 sm:hidden">
            <Player
              autoplay
              loop
              src="https://lottie.host/7b111bb0-ed19-4c3c-ae62-db496ac12d0d/e8nW7kbjfr.json"
              style={style}
            />
          </div>
        )}
      </div>

      {/* Button */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ y: 200, scale: 1, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.4 }}
          className={`flex items-center w-36 p-1`}
        >
          <a href="#about" className="my-auto text-white flex items-center cursor-pointer">
            {t('scroll')}
            <Image src="https://biaupload.com/do.php?imgf=org-dadcd97e3c0d1.png" width={30} height={30} alt="Arrow Down" className={`mt-2 ms-1`} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
