import Clients from "./Clients";
import ReadMoreButton from "./ReadMoreButton";

const Portfolio = () => {
    return (
        <>
            <div className="min-h-screen flex justify-between lg:px-5 lg:flex-col lg:justify-center md:px-5 md:flex-col items-center px-32 sm:flex-col sm:py-10 overflow-hidden">
                <div className="relative items-start w-1/3 max-h-64 lg:w-full md:w-full sm:w-full md:justify-center">
                    <p className="text-sm text-[#F99D1C] uppercase">A bit about our portfolio</p>
                    <p className="text-start text-lg text-ellipsis h-60">
                    Welcome to our creative wonderland, where design dreams take flight and visual stories come to life. In our extensive portfolio, you will find a diverse collection of design projects that showcase our passion for crafting innovative, modern, and captivating visual experiences.                </p>
                    <ReadMoreButton title="more works" top="top-[500000rem]"/>
                </div>
                <div className='flex ml-auto lg:flex-row lg:w-full lg:justify-center sm:flex-col md:flex-col sm:mt-14'>
                    <div className='flex justify-end items-center float-right md:flex-col-reverse md:mx-auto'>
                        <div className='flex flex-row sm:flex-col'>
                            <div className='mx-auto mr-2'>
                                <img src="/images/1.png" alt="portfolio1" className='w-60 rounded-md md:w-40' />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row'>
                            <div className='box my-1 lg:mr-2'>
                                <img src="/images/2.png" alt="portfolio2" className='w-60 rounded-md md:w-40' />
                            </div>
                            <div className='box my-1 lg:mr-2'>
                                <img src="/images/3.png" alt="portfolio3" className='w-60 rounded-md md:w-40' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

     );
}
 
export default Portfolio;