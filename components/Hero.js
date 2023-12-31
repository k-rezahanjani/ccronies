"use client"
import {motion} from "framer-motion";
import { SlArrowDownCircle } from "react-icons/sl";

const Hero = () => {
    return ( 
        <div className="sm:relative h-screen flex flex-row lg:px-5 md:px-5 place-items-center justify-center px-32 bg-[black] sm:h-[37.5rem]
        bg-hero-pattern bg-no-repeat bg-right lg:bg-small xl:bg-large">
            <motion.div 
                className="flex flex-col w-[50rem]"
                initial={{opacity: 0, scale: 1}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
            >
                <p className="text-lg text-[#F99D1C] mb-3">Hello People!</p>
                <h2 className="text-[4.5rem] leading-[90px] md:text-6xl sm:text-4xl font-bold">We're <br/>Creative Cronies.</h2>
            </motion.div>
            <div className="w-[15rem]"></div>
            <motion.div 
                initial={{y: 200, scale: 1, opacity: 0}}
                animate={{y: 0, scale: 1, opacity: 1}}
                transition={{duration: 1.4}}
                className="flex flex-row absolute bottom-3 cursor-pointer xl:bottom-10">
                <button className="my-auto"><a href="#about">Scroll Down</a></button>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30" fill="none" className="mt-2 ms-1 sm:absolute sm:bottom-0 sm:right-0 sm:left-24">
                    <g filter="url(#filter0_d_12_866)">
                        <circle cx="9" cy="9" r="9" transform="matrix(1.19249e-08 1 1 -1.19249e-08 5 3)" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M14 16L14 8M14 16L18 12M14 16L10 12" stroke="#F99D1C" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_12_866" x="-2" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_12_866"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_12_866" result="shape"/>
                        </filter>
                    </defs>
                </svg>
                {/* <SlArrowDownCircle size={20} color="#ffa807" className="my-auto ms-2 sm:absolute sm:bottom-0 sm:right-0 sm:left-24"/> */}
            </motion.div>
        </div>
     );
}
 
export default Hero;