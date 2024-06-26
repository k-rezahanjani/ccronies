"use client"
import { motion } from 'framer-motion'
import ReadMoreButton from "../ReadMoreButton";

export default function About() {

    return ( 
        <div className="min-h-screen flex px-32 lg:px-5 md:px-5 items-center justify-between bg-black lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse sm:py-10 -z-20">
            <div className="relative items-satart w-1/3 lg:w-full md:w-full sm:w-full sm:h-80">
                <p className="text-[#F99D1C] font-bold text-lg">Welcome to Creative Cronies Studio</p>
                <p className="text-start text-white text-wrap text-[0.9rem] leading-6 text-ellipsis capitalize md:overflow-hidden md:text-ellipsis h-[16.5rem] ">
                where boundless creativity and design expertise come together to craft innovative visual solutions.<br/>
                As a dynamic duo of graphic designers with a passion for artistic collaboration, we pride ourselves on delivering captivating designs that elevate brands and mesmerize audiences.
                </p>
                <ReadMoreButton title="read more"/>
            </div>
            <div className="items-end flex">
                <motion.img 
                    src="/images/Frame.png" 
                    width={500} 
                    height={500} 
                    alt="frame"
                    initial={{
                        x: -200,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2 }}
                    whileInView={{x:0, opacity: 1}}
                    viewport={{once: true}}
                    className="md:w-100"
                />
            </div>
        </div>
     );
}