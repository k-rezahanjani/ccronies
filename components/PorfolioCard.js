"use client"
import React, { useState } from "react";
import portfolio from '/data/portfolio.json';
import Image from "next/image";

const ImageCarousel = ({ images }) => {
    const [hovered, setHovered] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const handleNext = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div
            className="carousel-container relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Image
                src={images[currentImage]}
                alt={`Carousel Image ${currentImage}`}
                width={500}
                height={500}
                className="rounded-lg shadow-lg transition-all duration-500 ease-in-out"
            />
            {hovered && (
                <>
                    <button
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                        onClick={handlePrev}
                    >
                        &lt;
                    </button>
                    <button
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none"
                        onClick={handleNext}
                    >
                        &gt;
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
