"use client"
import {motion} from "framer-motion";
import { SlArrowDownCircle } from "react-icons/sl";

const Hero = () => {
    return ( 
        <div className="sm:relative h-screen flex flex-col lg:px-5 md:px-5 items-center justify-center px-32 bg-[#050708] sm:h-[37.5rem]">
            <motion.div 
                className="flex flex-col justify-center"
                initial={{opacity: 0, scale: 1}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1.5}}
            >
                <p className="text-sm text-amber-600 mb-3">Hello People!</p>
                <h2 className="text-7xl font-extrabold leading-[90px] md:text-6xl sm:text-4xl">We're <br/>Creative Cronies.</h2>
            </motion.div>
            {/* <div>div2</div> */}
            <motion.div 
                initial={{y: 200, scale: 1, opacity: 0}}
                animate={{y: 0, scale: 1, opacity: 1}}
                transition={{duration: 1.4}}
                className="flex flex-row absolute bottom-3 cursor-pointer">
                <button><a href="#about">Scroll Down</a></button>
                <SlArrowDownCircle size={20} color="#ffa807" className="my-auto ms-2 sm:absolute sm:bottom-0 sm:right-0 sm:left-24"/>
            </motion.div>
        </div>
     );
}
 
export default Hero;