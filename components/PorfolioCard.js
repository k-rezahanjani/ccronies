"use client"
import React, { useState } from "react";
import portfolio from '/data/portfolio.json';
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";


const ImageCarousel = ({ images }) => {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const handleNext = () => {
        setFadeOut(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
            setFadeOut(false);
        }, 300); 
    };

    const handlePrev = () => {
        setFadeOut(true);
        setTimeout(() => {
            setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
            setFadeOut(false);
        }, 300); 
    };

    return (
        <div
            id="default-carousel"
            className="relative rounded-sm"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={images[currentImage]}
                alt={`Carousel Image ${currentImage}`}
                width={500}
                height={500}
                className={`transition-opacity duration-500 ease-out rounded-lg ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
            />
            {hovered && (
                <>
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                aria-current={index === currentImage}
                                aria-label={`Slide ${index + 1}`}
                                onClick={() => setCurrentImage(index)}
                                className={`w-3 h-3 rounded-full ${index === currentImage ? 'bg-white' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={handlePrev}
                        type="button"
                        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <IoArrowBackCircleOutline className="text-4xl text-white" />
                        <span className="sr-only">Previous</span>
                    </button>
                    <button
                        onClick={handleNext}
                        type="button"
                        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <IoArrowForwardCircleOutline className="text-4xl text-white" />
                        <span className="sr-only">Next</span>
                    </button>
                </>
            )}
        </div>
    );
};

const PortfolioCard = () => {
    const t = useTranslations("Portfolio")
    const portfolio = t.raw('portfolio')

    const locale = useLocale();
    const isRTL = locale === 'fa';
    return (
        <section className="flex flex-wrap bg-black text-white py-12 px-6 lg:px-24 sm:px-6">
            <div className={`flex flex-col`}>
                {portfolio.map((item, index) => (
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
