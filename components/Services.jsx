import data from '../data.json'

const Services = () => {
    return ( 
        <div className="h-screen flex flex-col my-44 px-32 lg:px-5 md:px-5 items-center justify-center bg-[#000] sm:py-10 lg:h-fit">
            <div className="items-start flex flex-col text-center">
                <p className="text-sm text-orange-500">That's it</p>
                <h1 className="text-left text-7xl lg:text-4xl text-ellipsis h-28 md:overflow-hidden md:text-ellipsis capitalize">
                    best Instagram promotion offer
                </h1>
            </div>
            <div className="flex flex-wrap gap-x-2 lg:flex-col lg:gap-y-5 xl:mt-10 xl:gap-y-5">
                {data.packages.map((item, index) => (
                    <div key={index} className={`w-[350px] lg:w-auto rounded-md p-5 ${index % 2 === 0 ? 'bg-[#2F3234]' :'bg-[#5B2E91]'} capitalize`}>
                        <div className="caption-top">{item.name}</div>
                        <div className="w-full card-body py-2">
                            <p>{item.description}</p>
                        </div>
                        <div className="w-full py-2">
                            <h2 className="text-3xl">{item.price}<span className="text-sm text-slate-[#FFF]">/month</span></h2>
                        </div>
                        <div className="py-2 w-full flex justify-center mb-2">
                            <button className="bg-transparent text-[#F99D1C] font-semibold py-2 px-4 border border-[#F99D1C] hover:border-transparent rounded w-full">
                            Get Started Now
                            </button>
                        </div>
                        <div className="flex flex-row justify-start">
                            <div className="mr-2">
                                {
                                    item.options.map((option, index) => (
                                        <div key={index} className='flex flex-row gap-2'>
                                            <img src={option.icons} className='py-2'/>
                                            <p className='my-auto'>{option.text}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Services;