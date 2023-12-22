import marketingData from "../marketingData.json";

const DigitalMarketing = () => {

    const firstItems = marketingData && marketingData.marketing.slice(0, 2);
    const restItems = marketingData && marketingData.marketing.slice(2);

    return ( 
        <div className="h-screen flex flex-col px-32 lg:px-5 md:px-5 items-center justify-center bg-[#121415] sm:py-10 lg:h-fit">
            <div className="flex flex-wrap gap-5 justify-center lg:flex-col-reverse">
                <div className="flex flex-wrap gap-[15px]">
                    {
                        firstItems && firstItems.map(item => (
                            <div className="bg-[#000] w-52 p-5 rounded-lg" key={item.id}>
                                <img src={item.image} alt={item.name} width={70} height={70}/>
                                <p className="capitalize mt-3 text-[#C9C9C9]">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
                <div className="items-start w-1/3 lg:w-full md:w-full sm:w-full">
                    <h2 className="text-white text-2xl capitalize">Graphic Design Services</h2>
                    <p className="text-[#C9C9C9] text-justify capitalize">
                    With a focus on modern aesthetics, minimalism, and cutting-edge design techniques, our services cover a wide spectrum of design realms. From crafting iconic logos and brand visual identities to developing engaging motion graphics and user-friendly websites, we take pride in delivering design solutions that leave a lasting impression.
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center lg:flex-col-reverse">
                <div className="flex flex-wrap gap-[15px]">
                    {
                        restItems.map(item => (
                            <div className="bg-[#000] w-52 p-5 rounded-lg" key={item.id}>
                                <img src={item.image} alt={item.name} width={70} height={70}/>
                                <p className="capitalize mt-3 text-[#C9C9C9]">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col mr-auto py-20 px-24 md:px-0">
                <p className="text-sm text-amber-600 mb-3 capitalize">Want to start a project?</p>
                <h2 className="text-7xl font-extrabold leading-[90px] md:text-6xl sm:text-5xl">Let’s Talk...</h2>
            </div>
        </div>
     );
}
 
export default DigitalMarketing;