'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Montserrat } from "next/font/google";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const mont = Montserrat({ subsets: ['latin'] });


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMenu, setSelectedMenu] = useState('');

    const t = useTranslations("Header");
    const locale = useLocale()
    const isRTL = locale === 'fa'

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
        return () => {
            document.body.classList.remove('overflow-y-hidden');
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
    };

    const handleLogoClick = () => {
        setSelectedMenu('');
    };

    return (
        <header className={`bg-black top-0 pt-7 flex items-start justify-between mx-auto px-32 lg:px-5 md:px-5 ${isRTL ? '' : mont.className}`}>
            {/* Logo */}
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 1 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="sm:block lg:hidden md:hidden xl:hidden"
            >
                <Link href="/" className="cursor-pointer">
                    <Image
                        src="https://s32.picofile.com/file/8479851068/logo_resp.png"
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
                    {/* <Image
                        src="https://s32.picofile.com/file/8479850892/logo.png"
                        className='background-color: black'
                        width={200}
                        height={200}
                        alt="logo"
                        onClick={handleLogoClick}
                    /> */}
                    <svg width="196" height="39" viewBox="0 0 196 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_958_9385)">
                            <g clip-path="url(#clip0_958_9385)">
                                <path d="M146.516 0H143.289V13.8404H146.516V0Z" fill="white" />
                                <path d="M132.892 0H127.898V3.22632H132.892V13.8404H136.114V3.22632H141.108V0H136.114H132.892Z" fill="white" />
                                <path d="M120.882 0H112.508V13.8404H115.735V10.0563H122.496V13.8404H125.723V4.83401C125.717 2.16546 123.551 0 120.882 0ZM122.496 6.82995H115.735V3.22085H120.888C121.779 3.22085 122.501 3.94267 122.501 4.83401V6.82995H122.496Z" fill="white" />
                                <path d="M158.681 9.00635C158.681 9.89769 157.959 10.6195 157.067 10.6195H151.915V0H148.688V13.8404H157.062C159.731 13.8404 161.897 11.6749 161.897 9.00635V0H158.67V9.00635H158.681Z" fill="white" />
                                <path d="M94.6838 10.0563V4.83401C94.6838 2.16546 92.5178 0 89.8485 0H81.7148V13.8404H84.942V10.0563H88.3443L90.9972 13.8404H94.93L92.2771 10.0563H94.6838ZM91.4566 6.82995H84.9366V3.22085H89.843C90.7346 3.22085 91.4566 3.94267 91.4566 4.83401V6.82995Z" fill="white" />
                                <path d="M97.1094 4.83401V13.8404H110.319V10.614H100.331V8.53061H108.328V5.30429H100.331V4.82854C100.331 3.9372 101.053 3.21538 101.945 3.21538H110.319V0H101.945C99.2754 0 97.1094 2.16546 97.1094 4.83401Z" fill="white" />
                                <path d="M168.929 3.22632H177.303V0H168.929C166.26 0 164.094 2.16546 164.094 4.83401V13.8404H177.303V10.614H167.315V8.53061H175.312V5.30429H167.315V4.82854C167.315 3.9372 168.038 3.21538 168.929 3.21538V3.22632Z" fill="white" />
                                <path d="M66.3242 4.83401V13.8404H79.5339V10.614H69.546V4.83401C69.546 3.94267 70.268 3.22085 71.1596 3.22085H79.5339V0H71.1596C68.4903 0 66.3242 2.16546 66.3242 4.83401Z" fill="white" />
                                <path d="M139.958 17.1602H136.73V31.0005H139.958V17.1602Z" fill="white" />
                                <path d="M142.137 21.9934V30.9997H157.627V27.7734H145.364V25.69H155.642V22.4637H145.364V21.9879C145.364 21.0966 146.086 20.3748 146.978 20.3748H157.627V17.1484H146.978C144.308 17.1484 142.142 19.3139 142.142 21.9824L142.137 21.9934Z" fill="white" />
                                <path d="M101.243 27.2164V21.9942C101.243 19.3256 99.0774 17.1602 96.4081 17.1602H87.1367V31.0005H90.3639V27.2164H94.9039L97.5568 31.0005H101.49L98.8367 27.2164H101.243ZM98.0162 23.9901H90.3585V20.381H96.4081C97.2997 20.381 98.0217 21.1028 98.0217 21.9942V23.9901H98.0162Z" fill="white" />
                                <path d="M66.3242 21.9918V30.9982H84.9545V27.7719H69.546V21.9918C69.546 21.1005 70.268 20.3787 71.1596 20.3787H84.9545V17.1523H71.1596C68.4903 17.1523 66.3242 19.3178 66.3242 21.9864V21.9918Z" fill="white" />
                                <path d="M114.318 17.1602H108.503C106.397 17.1602 104.603 18.5054 103.941 20.381C103.761 20.8841 103.668 21.4255 103.668 21.9942V26.161C103.668 28.8296 105.834 30.995 108.503 30.995H114.318C116.424 30.995 118.218 29.6498 118.88 27.7742C119.06 27.2711 119.153 26.7297 119.153 26.161V21.9942C119.153 19.3256 116.987 17.1602 114.318 17.1602ZM115.931 26.1665C115.931 27.0578 115.209 27.7797 114.318 27.7797H108.503C107.612 27.7797 106.89 27.0578 106.89 26.1665V21.9942C106.89 21.1028 107.612 20.381 108.503 20.381H114.318C115.209 20.381 115.931 21.1028 115.931 21.9942V26.1665Z" fill="white" />
                                <path d="M131.328 26.5329L125.048 17.8273C124.748 17.4062 124.261 17.1602 123.741 17.1602H121.34V31.0005H124.567V21.6278L131.328 31.0005H134.555V17.1602H131.328V26.5329Z" fill="white" />
                                <path d="M164.644 20.3849H177.301V17.1641H164.644C161.975 17.1641 159.809 19.3295 159.809 21.9981V25.6947H174.079V26.1704C174.079 27.0618 173.357 27.7836 172.466 27.7836H159.809V31.0044H172.466C175.135 31.0044 177.301 28.839 177.301 26.1704V22.4738H163.03V21.9981C163.03 21.1067 163.752 20.3849 164.644 20.3849Z" fill="white" />
                                <path d="M14.6388 31L24.9768 20.6648H14.6388V15.4973C14.6388 12.6428 16.9525 10.3297 19.8078 10.3297H35.3148V0H19.8078C11.242 0 4.30078 6.93932 4.30078 15.5027V31.0055H14.6388V31Z" fill="white" />
                                <path d="M45.6486 0L35.3106 10.3352H45.6486V15.5027C45.6486 18.3572 43.3349 20.6703 40.4796 20.6703H24.9727V31.0055H40.4796C49.0454 31.0055 55.9866 24.0662 55.9866 15.5027V0H45.6486Z" fill="white" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_958_9385" x="0" y="0" width="200" height="39" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_958_9385" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_958_9385" result="shape" />
                            </filter>
                            <clipPath id="clip0_958_9385">
                                <rect width="173" height="31" fill="white" transform="translate(4.30078)" />
                            </clipPath>
                        </defs>
                    </svg>

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
                        {t('about')}
                    </button>
                </Link>
                <Link href="/portfolio">
                    <button
                        onClick={() => handleMenuClick('portfolio')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'portfolio' ? 'text-[#F99D1C]' : ''}`}
                    >
                        {t('portfolioNav')}
                    </button>
                </Link>
                {/* <Link href="/packages">
                    <button 
                        onClick={() => handleMenuClick('packages')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'packages' ? 'text-[#F99D1C]' : ''}`}
                    >
                        packages
                    </button>
                </Link> */}
                <Link href="/services">
                    <button
                        onClick={() => handleMenuClick('service')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'service' ? 'text-[#F99D1C]' : ''}`}
                    >
                        {t('servicesNav')}
                    </button>
                </Link>
                <Link href="/contact">
                    <button
                        onClick={() => handleMenuClick('contact')}
                        className={`capitalize hover:text-[#F99D1C] ${selectedMenu === 'contact' ? 'text-[#F99D1C]' : ''}`}
                    >
                        {t('contact')}
                    </button>
                </Link>
                {/* <LocaleSwitcher /> */}
            </motion.div>
            {/* Menu Items when on tablet and mobile screen */}
            <div className="hidden md:flex">
                <button onClick={toggleMenu} className="text-white text-2xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
                {
                    isOpen &&
                    <div className="absolute top-20 left-0 flex flex-col gap-y-8 w-full justify-center items-center bg-black min-h-screen z-50">
                        <Link href="/about" className="text-white" onClick={toggleMenu}>{t('about')}</Link>
                        <Link href="/portfolio" className="text-white" onClick={toggleMenu}>{t('portfolioNav')}</Link>
                        <Link href="/services" className="text-white" onClick={toggleMenu}>{t('servicesNav')}</Link>
                        <Link href="#footer" className="text-white" onClick={toggleMenu}>{t('contact')}</Link>
                    </div>
                }
            </div>
        </header>
    );
}

export default Header;
