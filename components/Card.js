import React from "react";
import Image from "next/image";

const Card = ({ image, name, title, description }) => {
    return (
        <div className="flex flex-row w-1/2 bg-[#5F2F8E] p-2 overflow-hidden">
            <div className="w-1/3 relative">
                <Image src={image} alt={name} layout="fill" objectFit="cover" />
            </div>
            <div className="flex flex-col w-2/3 p-4">
                <h3 className="text-white font-bold text-xl">{name}</h3>
                <h4 className="text-[#F99D1C] text-lg mb-2">{title}</h4>
                <p className="text-wrap text-white text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Card;
