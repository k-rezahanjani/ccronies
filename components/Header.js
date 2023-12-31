'use client'
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';
import { IoMdMenu } from "react-icons/io";

const Header = () => {

    return ( 
        <header className="sticky top-0 pt-7 flex items-start justify-between mx-auto px-32 lg:px-5 md:px-5">
            <motion.div
                initial={{x: -500, opacity: 0, scale: 1}} 
                animate={{x: 0, opacity: 1, scale: 1}} 
                transition={{duration: 1.5}}
            >
                <Image src="/images/logo.png" width={200} height={200} alt="logo"/>
            </motion.div>
            <motion.div 
                className="flex flex-row space-x-3 items-center justify-center text-center overflow-hidden md:hidden"
                initial={{opacity: 0, scale: 1}} 
                animate={{opacity: 1, scale: 1}} 
                transition={{duration: 1.5}}
            >
                <Link href="#">
                    <button className="capitalize">about</button>
                </Link>
                <Link href="#" >
                    <button className="capitalize">portfolio</button>
                </Link>
                <Link href="#" >
                    <button className="capitalize">offers</button>
                </Link>
                <Link href="#" >
                    <button className="capitalize">service</button>
                </Link>
                <Link href="#" >
                    <button className="capitalize">contact</button>
                </Link>
                {/* <RxHamburgerMenu name="menu" className="text-3xl text-orange-400 cursor-pointer" onClick={(e) => onToggle(e.name)}/> */}
            </motion.div>
            <motion.div 
                animate={{opacity: 1, scale: 1}}
                initial={{opacity: 0, scale:1}} 
                transition={{duration: 1.5}} 
                className="md:block text-3xl lg:hidden xl:hidden 2xl:hidden"
            >
                <IoMdMenu name="menu"/>
            </motion.div>
        </header>
     );
}
 
export default Header;
