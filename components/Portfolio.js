import Clients from "./Clients";
import ReadMoreButton from "./ReadMoreButton";

const Portfolio = () => {
    return (
        <>
            <div className="min-h-screen flex justify-between lg:px-5 lg:flex-col lg:justify-center md:px-5 md:flex-col items-center px-32 sm:flex-col sm:py-10 overflow-hidden bg-[#050708] -z-10">
                <div className="relative items-start w-1/3 max-h-64 lg:w-full md:w-full sm:w-full md:justify-center">
                    <p className="text-lg text-[#F99D1C] font-bold uppercase">A bit about our portfolio</p>
                    <p className="text-start text-white text-wrap text-[0.9rem] text-ellipsis h-60 leading-6">
                    Welcome to our creative wonderland, where design dreams take flight and visual stories come to life. In our extensive portfolio, you will find a diverse collection of design projects that showcase our passion for crafting innovative, modern, and captivating visual experiences.                </p>
                    <ReadMoreButton title="more works" top="top-[500000rem]"/>
                </div>
                <div className='flex ml-auto lg:flex-row lg:w-full lg:justify-center sm:flex-col md:flex-col sm:mt-14'>
                    <div className='flex justify-end items-center float-right md:flex-col md:mx-auto'>
                        <img src="/images/pback.png" className="w-1/2 rounded-md md:w-full"/>
                    </div>
                </div>
            </div>
        </>

     );
}
 
export default Portfolio;