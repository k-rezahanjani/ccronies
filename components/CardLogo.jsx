const CardLogo = ({ image, title }) => {
    return ( 
        <div className="flex flex-row justify-center items-center p-5">
            <div className="flex justify-center items-center w-36">
                <img src={image} alt={title} width={150} height={150}/>
            </div>
        </div>
     );
}
 
export default CardLogo;