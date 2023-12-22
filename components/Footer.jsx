import { VscSend } from "react-icons/vsc";
import { FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp  } from "react-icons/fa";


const Footer = () => {
    return ( 
        <div className="h-[15rem] flex flex-col px-32 lg:px-5 md:px-5 items-center justify-center bg-[#050708] sm:py-10 lg:h-fit">
            <div className="flex flex-row gap-x-60 md:flex-col md:items-center md:justify-center md:gap-y-10">
                <div className="flex flex-col info">
                    <p className="text-sm text-[#DBD8D3]">admin@ccronies.com</p>
                    <p className="text-sm text-[#DBD8D3]">+98-9912772037</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <form className="w-full max-w-sm">
                        <div className="flex items-center border-b border-[#DBD8D3] py-2">
                            <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Add Your Email" aria-label="Full name" />
                            <button><VscSend size={25}/></button>
                        </div>
                    </form>
                    <div className="gap-x-4 flex flex-row mt-5">
                        <FaInstagram  size={25}/>
                        <FaLinkedinIn  size={25}/>
                        <FaYoutube size={25} />
                        <FaWhatsapp  size={25} />
                    </div>
                </div>
                <div className="flex flex-col info md:flex md:flex-col">
                    <p className="text-sm text-[#DBD8D3] capitalize">&copy; creative cronies</p>
                    <p className="text-sm text-[#DBD8D3] cursor-pointer">privacy & terms</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;