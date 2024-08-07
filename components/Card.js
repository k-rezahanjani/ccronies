import React from "react";
import Image from "next/image";

const Card = ({ image, name, title, description, id }) => {
    return (
        <div className="flex flex-row items-center w-full bg-[#5F2F8E] p-2 lg:flex-col sm:flex-col sm:items-center">
            <div className="w-1/3 relative h-auto sm:w-1/2 sm:h-40 sm:mb-6">
            <Image 
                src={image} 
                alt={`Portrait of ${name}`}
                width={300}
                height={300}
                className="sm:rounded-full"  
            />
            </div>
            <div className="flex flex-col w-2/3 p-4 lg:w-full sm:w-full">
                <h3 className="text-white font-bold text-xl">{name}</h3>
                <h4 className="text-[#F99D1C] text-lg mb-2">{title}</h4>
                <p className="text-white text-sm">{description}</p>
            </div>
        </div>
    );
}

export default Card;
