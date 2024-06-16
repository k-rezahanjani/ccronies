import React from "react";

const Card = ({ image, name, title }) => {
    return ( 
        <div className="flex flex-row justify-between gap-4">
            {/* Card 1 */}
            <div className="flex flex-row w-1/2 bg-[#5F2F8E] p-2 overflow-hidden">
                <div className="w-1/3">
                    <img src={image} alt={name} className="object-cover h-full w-full" />
                </div>
                <div className="flex flex-col w-2/3 p-4">
                    <h3 className="text-white font-bold text-xl">{name}</h3>
                    <h4 className="text-[#F99D1C] text-lg mb-2">{title}</h4>
                    <p className="text-wrap text-white text-sm">
                    Hi, I'm a creative advertising designer with a demonstrated history of working in digital marketing.
                    Skilled in Design, Motion Graphics, Branding, and Print. I've got a master's degree from the University of Science and Culture.
                    </p>
                </div>
            </div>
            {/* Card 2 */}
            {/* <div className="flex flex-row w-1/2 bg-[#5F2F8E] p-2 overflow-hidden">
                <div className="w-1/3">
                    <img src="/images/tara.png" alt="Tara Nabatian" className="object-cover h-full w-full" />
                </div>
                <div className="flex flex-col w-2/3 p-4">
                    <h4 className="text-white font-bold text-xl">Tara Nabatian</h4>
                    <h4 className="text-[#F99D1C] text-lg mb-2">Senior Graphic Designer</h4>
                    <p className="text-wrap text-white text-sm">
                    Hi, I'm a creative designer with expertise in logo and branding design. I hold a bachelor's degree from the university of Science and Culture.
                    I'm passionate about crafting compelling visual identities that capture your brand's essence.
                    </p>
                </div>
            </div> */}
        </div>
     );
}
 
export default Card;

