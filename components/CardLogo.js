import Image from "next/image";

const CardLogo = ({ image, title }) => {
    return ( 
        <div className="flex flex-row justify-center items-center p-5">
            <div className="flex justify-center items-center w-36 cursor-pointer">
                <Image src={image} alt={title} width={150} height={150} quality={80}/>
            </div>
        </div>
     );
}
 
export default CardLogo;