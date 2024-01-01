import { useEffect, useState } from "react";
import { SlArrowUpCircle } from "react-icons/sl";

const ScrollTop = () => {
    const [scrollTop, setScrollTop] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 500) {
          setScrollTop(true)
        } else {
          setScrollTop(false);
        }
      })
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return ( 
        <div className="scroll">
            {scrollTop && (
                <>
                    <button
                        className="fixed right-20 bottom-20 text-white my-auto text-start p-2 flex flex-row justify-center items-center cursor-pointer sm:hidden"
                        onClick={scrollToTop}>
                        Swipe Up
                        <SlArrowUpCircle color="#F99D1C" className="my-auto mx-2" size={22}/>
                    </button>    
                    <button className="fixed right-3 bottom-20 xl:hidden lg:hidden md:hidden sm:block" onClick={scrollToTop}><SlArrowUpCircle color="#F99D1C" size={30}/></button>
                </>
            
            )}
        </div>
     );
}
 
export default ScrollTop;