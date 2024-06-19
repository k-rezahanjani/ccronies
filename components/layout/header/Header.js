'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleLogoClick = () => {
        setSelectedMenu('');
    };

    return (
        <header className="bg-black top-0 pt-7 flex items-start justify-between mx-auto px-32 lg:px-5 md:px-5">
            {/* Logo */}
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="sm:block lg:hidden md:hidden xl:hidden"
            >
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/images/logo-resp.png"
                        className='background-color: black'
                        width={65}
                        height={65}
                        alt="logo"
                        onClick={handleLogoClick}
                    />
                </Link>
            </motion.div>
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="sm:hidden"
            >
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="/images/logo.png"
                        className='background-color: black'
                        width={200}
                        height={200}
                        alt="logo"
                        onClick={handleLogoClick}
                    />
                </Link>
            </motion.div>
            <motion.div
                className="flex flex-row space-x-3 items-center justify-center text-center text-white overflow-hidden md:hidden"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
            >
                <Link href="/about">
                    <button 
                        onClick={() => handleMenuClick('about')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'about' ? 'text-[#F99D1C]' : ''}`}
                    >
                        about
                    </button>
                </Link>
                <Link href="/portfolio">
                    <button 
                        onClick={() => handleMenuClick('portfolio')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'portfolio' ? 'text-[#F99D1C]' : ''}`}
                    >
                        portfolio
                    </button>
                </Link>
                <Link href="/packages">
                    <button 
                        onClick={() => handleMenuClick('packages')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'packages' ? 'text-[#F99D1C]' : ''}`}
                    >
                        packages
                    </button>
                </Link>
                <Link href="#">
                    <button 
                        onClick={() => handleMenuClick('service')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'service' ? 'text-[#F99D1C]' : ''}`}
                    >
                        service
                    </button>
                </Link>
                <Link href="#">
                    <button 
                        onClick={() => handleMenuClick('contact')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'contact' ? 'text-[#F99D1C]' : ''}`}
                    >
                        contact
                    </button>
                </Link>
                {/* <RxHamburgerMenu name="menu" className="text-3xl text-orange-400 cursor-pointer" onClick={(e) => onToggle(e.name)}/> */}
            </motion.div>
            {/* Menu Items when on tablet and mobile screen */}
            <div className="hidden md:flex">
                <button onClick={toggleMenu} className="text-white text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
}

export default Header;
