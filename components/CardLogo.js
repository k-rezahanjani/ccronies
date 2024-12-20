import Image from "next/image";

const CardLogo = ({ image, name, title }) => {
    return (
        <div className="flex flex-row justify-center items-center p-5">
            <div className="flex justify-center items-center w-36 cursor-pointer">
                <Image src={image} alt={name} width={150} height={150} quality={80} title={title} className="w-[150px] h-[150px] object-contain" />
            </div>
        </div>
    );
}

export default CardLogo;