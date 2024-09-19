'use client'
import data from '/data/data.json'
import PackageCard from '../PackageCard';

const Services = () => {
    return (
        <>
            <div className='flex flex-col justify-center px-32 mb-12 sm:px-6'>
                <p className='text-[#F99D1C] text-xl text-left mb-6'>Best Promotion Offer For:</p>
                <div className="flex gap-8 w-full items-center sm:flex-col">
                    <div className='flex items-start'>
                        <p class="text-6xl [writing-mode:vertical-rl] rotate-180 text-[#9B80BA] text-center sm:[writing-mode:horizontal-tb] sm:text-4xl uppercase font-bold">Instagram</p>
                    </div>
                    {data.packages.map((item, index) => (
                        <PackageCard 
                            key={index}
                            plan={item.plan}
                            description={item.description}
                            price={item.price}
                            timeline={item.timeline}
                            features={item.features}
                            isEven={index % 2 === 0}
                        />
                    ))}
                </div>
            </div>
            <div className='flex flex-col justify-around px-32 mb-12 sm:px-6'>
                <p className='text-[#F99D1C] text-xl text-left mb-6'>Best Promotion Offer For:</p>
                <div className="flex gap-8 w-full items-center sm:flex-col">
                    <div className='flex items-start'>
                        <p class="text-5xl [writing-mode:vertical-rl] rotate-180 text-[#9B80BA] text-center sm:[writing-mode:horizontal-tb] sm:text-4xl uppercase font-bold">
                            <span className='text-4xl'>Branding/</span><br/> Visual Identity
                        </p>
                    </div>
                    <div className='flex flex-col w-full gap-4'>
                        {data.packages2.map((item, index) => (
                            <div key={index} className={`flex flex-col p-5 rounded-3xl capitalize bg-opacity-90 ${index % 2 === 0 ? 'bg-[#D1D3D4] text-black' : 'bg-[#5B2E91] text-white'} min-w-[280px] max-w-[350px]'}`}>
                                <div className='flex flex-row justify-between border-b-2 mb-1'>
                                    <div className='flex-flex-col'>
                                        <div className="font-bold text-2xl text-[#F99D1C]">{item.plan}</div>
                                        <p className='py-2 text-xs'>{item.description}</p>
                                    </div>
                                    <button 
                                        className={`
                                            bg-white 
                                            font-semibold
                                            px-4 
                                            border-2 
                                            border-[#F99D1C] 
                                            rounded-xl
                                            hover:bg-[#F99D1C] 
                                            hover:text-black 
                                            hover:border-transparent 
                                            my-3
                                            ${index % 2 === 0 ? 'text-[#5B2E91]' : 'text-gray-600'}`}
                                        >
                                        {item.timeline}
                                    </button>
                                    <div className="py-2">
                                        <h2 className="text-3xl font-bold">{item.price}</h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    {item.features.map((feature, index) => (
                                        <div key={index} className='flex flex-col items-start gap-2'>
                                            {feature.logo && <p className='text-sm capitalize'><span className='font-bold'>Logo Design:</span> {feature.logo}</p>}
                                            {feature.logo_motion && <p className='text-sm capitalize'><span className='font-bold'>Logo Motion Design:</span> {feature.logo_motion}</p>}
                                            {feature.branding && <p className='text-sm capitalize'><span className='font-bold'>Branding:</span> {feature.branding}</p>}
                                            {feature.stationary && <p className='text-sm capitalize'><span className='font-bold'>Stationary Design:</span> {feature.stationary}</p>}
                                            {feature.packaging && <p className='text-sm capitalize'><span className='font-bold'>Packaging Design:</span> {feature.packaging}</p>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;
