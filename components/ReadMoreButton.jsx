import { SlArrowRightCircle } from "react-icons/sl";

const ReadMoreButton = ({ title }) => {
    return ( 
        <div className={`flex flex-row lg:absolute lg:top-40 md:absolute md:bottom-0 sm:absolute sm:-bottom-36`}>
            <button className="capitalize">{title}</button>
            <SlArrowRightCircle className="my-auto ms-2"/>
        </div>
     );
}
 
export default ReadMoreButton;