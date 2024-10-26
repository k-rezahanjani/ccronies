import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { SlArrowUpCircle } from "react-icons/sl";

const ScrollTop = () => {
  const t = useTranslations("ScrollTop");
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScrollTop(true)
      } else if(window.screenY < 550) {
        setScrollTop(false);
      }
    })
    if(window.scrollY == 850) {
      alert("reached to 850")
    }
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
            className="fixed right-20 font-semibold bottom-28 text-white my-auto text-start p-2 flex flex-row justify-center items-center cursor-pointer sm:hidden"
            onClick={scrollToTop}>
            {t('scroll')}
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 28 30" fill="none" className="mt-2 ms-2">
              <g filter="url(#filter0_d_44_109)">
                <circle cx="9" cy="9" r="9" transform="matrix(7.54979e-08 -1 -1 -7.54979e-08 23 21.5)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 8.5L14 16.5M14 8.5L10 12.5M14 8.5L18 12.5" stroke="#F99D1C" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_44_109" x="-2" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_109" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_109" result="shape" />
                </filter>
              </defs>
            </svg>
            {/* <SlArrowUpCircle color="#F99D1C" className="my-auto mx-2" size={22}/> */}
          </button>
          <button className="fixed right-3 bottom-20 xl:hidden lg:hidden md:hidden sm:block" onClick={scrollToTop}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 28 30" fill="none" className="mt-2 ms-2">
              <g filter="url(#filter0_d_44_109)">
                <circle cx="9" cy="9" r="9" transform="matrix(7.54979e-08 -1 -1 -7.54979e-08 23 21.5)" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 8.5L14 16.5M14 8.5L10 12.5M14 8.5L18 12.5" stroke="#F99D1C" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <filter id="filter0_d_44_109" x="-2" y="0.5" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_44_109" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_44_109" result="shape" />
                </filter>
              </defs>
            </svg>
            {/* <SlArrowUpCircle color="#F99D1C" size={30}/> */}
          </button>
        </>

      )}
    </div>
  );
}

export default ScrollTop;