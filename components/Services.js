import data from '/data/data.json'
import PackageCard from './PackageCard';

const Services = () => {
    return (
        <>
            <div className='flex flex-col justify-center mx-auto mb-12'>
                <p className='text-[#F99D1C] text-xl text-left mb-6'>Best Promotion Offer For:</p>
                <div className="flex gap-8 w-full items-center">
                    <div className='flex items-start'>
                        <p class="text-7xl [writing-mode:vertical-rl] text-[#9B80BA] text-center">Instagram</p>
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
            <div className='flex flex-col justify-center mx-auto mb-12'>
                <p className='text-[#F99D1C] text-xl text-left mb-6'>Best Promotion Offer For:</p>
                <div className="flex gap-8 w-full items-center">
                    <div className='flex items-start'>
                        <p class="text-7xl [writing-mode:vertical-rl] text-[#9B80BA] text-center">Branding</p>
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
