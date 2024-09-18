
import { Montserrat } from 'next/font/google';
import PortfolioCard from '@/components/PorfolioCard';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

const mont = Montserrat({ subsets: ['latin'] });


const Home = () => {
    const t = useTranslations("Portfolio");
    const locale = useLocale()
    const isRTL = locale === 'fa';

    return (
        <div>
            <main className={`min-h-screen bg-black flex flex-col ${isRTL ? '' : mont.className}`}>
                <div className="flex w-full justify-between">
                    <div className={`w-full sm:px-8 ${isRTL ? 'ps-0 flex-row-reverse' : 'ps-32'} py-40 flex items-center lg:px-6 md:px-6 md:py-12 bg-black`}>
                    <div className={`flex flex-col w-1/2 pr-8 md:w-full ${isRTL ? 'text-right' : ''}`}>
                        <h2 className="text-lg text-[#F99D1C] mb-3 sm:text-3xl">{ t('title') }</h2>
                        <p className="text-wrap text-white text-7xl font-bold md:text-2xl sm:text-xl">
                            { t('desc') }
                        </p>
                    </div>
                    <div className={`flex w-1/2 sm:hidden md:hidden ${isRTL ? 'justify-start' : 'justify-end'}`}>
                        <Image src="https://biaupload.com/do.php?imgf=org-0846bf9f28bd1.png" alt="Hero Image" width={250} height={250} />
                    </div>
                    </div>
                </div>
                <PortfolioCard />
            </main>
        </div>
    );
}

export default Home;
