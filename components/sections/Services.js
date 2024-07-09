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
            <div className='flex flex-col justify-center px-32 mb-12 sm:px-6'>
                <p className='text-[#F99D1C] text-xl text-left mb-6'>Best Promotion Offer For:</p>
                <div className="flex gap-8 w-full items-center sm:flex-col">
                    <div className='flex items-start'>
                        <p class="text-5xl [writing-mode:vertical-rl] rotate-180 text-[#9B80BA] text-center sm:[writing-mode:horizontal-tb] sm:text-4xl uppercase font-bold">Branding /<br/> Visual Identity</p>
                    </div>
                    {data.packages2.map((item, index) => (
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
        </>
    );
}

export default Services;
