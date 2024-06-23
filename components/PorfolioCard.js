import React from "react";
import portfolio from '/data/portfolio.json'
import Image from "next/image";

const PortfolioCard = () => {
    return (
        <section className="flex flex-wrap bg-black text-white py-12 px-6 lg:px-24 sm:px-6">
            {/* Items */}
            <div className="flex flex-col">
                {portfolio.portfolio.map((item, index) => (
                    <div key={index} className={`flex ${index % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} justify-between items-center gap-4 sm:flex-col sm:gap-10`}>
                        <div className="w-1/3 mx-auto sm:w-full">
                            <h2 className="text-xl lg:text-3xl font-bold mb-4 text-[#F99D1C]">{item.title}</h2>
                            <p className="text-lg lg:text-xl">{item.description}</p>
                        </div>
                        <div className="w-1/2 flex justify-center lg:justify-start sm:w-full sm:mb-10">
                            <Image src={item.image} alt={item.title} width={500} height={500} className="rounded-lg shadow-lg"/>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default PortfolioCard;
