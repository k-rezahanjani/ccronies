'use client'
import Image from "next/image";
import Link from "next/link";
import {motion} from 'framer-motion';
import { IoMdMenu, IoMdClose  } from "react-icons/io";

const Header = () => {

    function toggleMenu() {
        <IoMdClose /> != <IoMdMenu />
    }

    return ( 
        <header className="sticky top-0 pt-7 flex items-start justify-between mx-auto px-32 lg:px-5 md:px-5">
            <motion.div
                initial={{x: -500, opacity: 0, scale: 1}} 
                animate={{x: 0, opacity: 1, scale: 1}} 
                transition={{duration: 1.5}}
            >
                <Image src="/images/logos/logo.png" width={150} height={150} alt="logo"/>
            </motion.div>
            <motion.div 
                className="flex flex-row space-x-3 items-center justify-center text-center overflow-hidden md:hidden"
                initial={{opacity: 0, scale: 1}} 
                animate={{x: 0, opacity: 1, scale: 1}} 
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
            <IoMdMenu name="menu" className="md:block text-3xl lg:hidden xl:hidden 2xl:hidden" onClick={toggleMenu(this)}/>
        </header>
     );
}
 
export default Header;
