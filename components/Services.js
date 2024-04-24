import data from '../data.json'

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-black py-10 px-5 min-h-screen lg:h-auto">
            <div className="flex flex-wrap items-center text-center mb-10 px-4 w-full">
                <p className="text-sm text-[#F99D1C] w-full">That's it</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-7xl capitalize overflow-hidden text-white text-wrap w-full">
                    best Instagram promotion offer
                </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {data.packages.map((item, index) => (
                    <div key={index} className={`flex flex-col p-5 rounded-md capitalize bg-opacity-90 ${index % 2 === 0 ? 'bg-[#2F3234]' : 'bg-[#5B2E91]'} min-w-[280px] max-w-[350px]`}>
                        <div className="font-bold">{item.name}</div>
                        <div className="py-2">
                            <p>{item.description}</p>
                        </div>
                        <div className="py-2">
                            <h2 className="text-3xl text-white">{item.price}<span className="text-sm">/month</span></h2>
                        </div>
                        <button className="bg-transparent text-[#F99D1C] font-semibold py-2 px-4 border border-[#F99D1C] rounded transition-colors hover:bg-[#F99D1C] hover:text-black hover:border-transparent w-full my-2">
                            Get Started Now
                        </button>
                        <div className="flex flex-col gap-2">
                            {item.options.map((option, optionIndex) => (
                                <div key={optionIndex} className='flex items-center gap-2'>
                                    <img src={option.icons} alt="" className='w-4 h-4'/>
                                    <p className='text-sm'>{option.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
