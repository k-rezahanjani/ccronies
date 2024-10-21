"use client"
import React, { useState } from "react";
import portfolio from '/data/portfolio.json';
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { IoArrowForwardCircleOutline, IoArrowBackCircleOutline } from "react-icons/io5";


const ImageCarousel = ({ images }) => {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    // Function to handle next image
    const handleNext = () => {
        triggerFade(() => setCurrentImage((prev) => (prev + 1) % images.length));
    };

    // Function to handle previous image
    const handlePrev = () => {
        triggerFade(() => setCurrentImage((prev) => (prev - 1 + images.length) % images.length));
    };

    // Function to trigger fade transition
    const triggerFade = (callback) => {
        setFade(true);
        setTimeout(() => {
            callback();
            setFade(false);
        }, 300);
    };

    return (
        <div
            id="carouselExample"
            className="carousel slide"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="carousel-inner">
                <Image
                    src={images[currentImage]}
                    width={500}
                    height={500}
                    className={`transition duration-500 ease-out rounded-lg ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>

            {/* Carousel controls */}
            <button
                className="carousel-control-prev"
                type="button"
                onClick={handlePrev}
                aria-label="Previous"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                onClick={handleNext}
                aria-label="Next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

            {/* Carousel indicators */}
            {hovered && (
                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExample"
                            data-bs-slide-to={index}
                            className={index === currentImage ? 'active' : ''}
                            aria-current={index === currentImage}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => triggerFade(() => setCurrentImage(index))}
                        ></button>
                    ))}
                </div>
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
