"use client"
import { motion } from 'framer-motion'
import ReadMoreButton from "../ReadMoreButton";
import { useLocale, useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('Hero')
    // const locale = useLocale()
    // const isRTL = locale === 'fa';

    return ( 
        <div className={`min-h-screen flex px-32 lg:px-5 md:px-5 items-center justify-between bg-black lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse sm:py-10 -z-20`}>
            <div className={`relative items-start w-1/3 lg:w-full md:w-full sm:w-full sm:h-80`}>
                <p className="text-[#F99D1C] font-bold text-lg">{ t('about.welcome') }</p>
                <p className={`text-white text-wrap text-[0.9rem] leading-6 capitalize md:overflow-hidden h-[16.5rem] `}>
                { t('about.desc') }<br/> { t('about.desc2') }
                </p>
                <ReadMoreButton title={t('about.read_more')}/>
            </div>
            <div className="items-end flex">
                <motion.img 
                    src="https://s32.picofile.com/file/8479218692/Frame.png" 
                    width={500} 
                    height={500} 
                    alt="frame"
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once: true}}
                    className="md:w-100"
                />
            </div>
        </div>
     );
}