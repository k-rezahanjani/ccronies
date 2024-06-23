
import PortfolioCard from '@/components/PorfolioCard';
import Image from 'next/image';

const Home = () => {
    return (
        <div>
            <main className='min-h-screen bg-black flex flex-col'>
                <div className="flex w-full justify-between">
                    <div className="w-full sm:px-8 ps-32 py-40 flex items-center lg:px-6 md:px-6 md:py-12 bg-black">
                    <div className="flex flex-col w-1/2 pr-8 md:w-full">
                        <h2 className="text-lg text-[#F99D1C] mb-3 sm:text-3xl">Let's see</h2>
                        <p className="text-wrap text-white text-7xl font-bold md:text-2xl sm:text-xl">
                            Our Works and Portfolio
                        </p>
                    </div>
                    <div className="flex w-1/2 justify-end sm:hidden md:hidden">
                        <Image src="/images/Isolation_Mode.png" alt="Hero Image" width={250} height={250} />
                    </div>
                    </div>
                </div>
                <PortfolioCard />
            </main>
        </div>
    );
}

export default Home;
