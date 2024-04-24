"use client"
import { motion } from 'framer-motion'
import ReadMoreButton from "./ReadMoreButton";

export default function About() {

    return ( 
        <div className="min-h-screen flex px-32 lg:px-5 md:px-5 items-center justify-between bg-[#121415] lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse sm:py-10">
            <div className="relative items-start w-1/3 lg:w-full md:w-full sm:w-full sm:h-80">
                <p className="text-sm text-[#F99D1C]">Welcome to Creative Cronies Studio</p>
                <p className="text-start text-white text-lg text-ellipsis capitalize md:overflow-hidden md:text-ellipsis h-[16.5rem] ">
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