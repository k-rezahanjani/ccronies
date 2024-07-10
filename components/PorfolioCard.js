"use client"
import React, { useState } from "react";
import portfolio from '/data/portfolio.json';
import Image from "next/image";

const ImageCarousel = ({ images }) => {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);


    const handleNext = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setFade(false);
        }, 1000);
    };

    const handlePrev = () => {
        setFade(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
            setFade(false);
        }, 1000); 
    };
    return (
        <div
            id="default-carousel"
            className="relative"
            data-carousel="slide"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className={`transition duration-500 ease-out ${fade ? 'opacity-0' : 'opacity-100'}`}>
                <Image
                    src={images[currentImage]}
                    alt={`Carousel Image ${currentImage}`}
                    width={500}
                    height={500}
                    className="rounded-lg shadow-lg transition-all duration-500 ease-in-out"
                />
            </div>
            {hovered && (
                <>
                    {/* Slider Indicators */}
                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        {images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-300'}`}
                                    aria-current={index === currentImage}
                                    aria-label={`Slide ${index + 1}`}
                                    data-carousel-slide-to={index}
                                    onClick={() => setCurrentImage(index)}
                                ></button>
                            ))}
                    </div>
                    <button onClick={handlePrev} type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                    <span onClick={handleNext} class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
                </>
            )}
        </div>
    );
};

const PortfolioCard = () => {
    return (
        <section className="flex flex-wrap bg-black text-white py-12 px-6 lg:px-24 sm:px-6">
            <div className="flex flex-col">
                {portfolio.portfolio.map((item, index) => (
                    <div key={index} className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} justify-between items-center gap-4 sm:flex-col sm:gap-10`}>
                        <div className="w-1/3 mx-auto sm:w-full">
                            <h2 className="text-xl lg:text-3xl font-bold mb-4 text-[#F99D1C]">{item.title}</h2>
                            <p className="text-lg lg:text-xl">{item.description}</p>
                        </div>
                        <div className="w-1/2 flex justify-center lg:justify-start sm:w-full sm:mb-10">
                            <ImageCarousel images={item.images} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioCard;
