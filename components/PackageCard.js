export const PackageCard = ({ plan, description, price, timeline, features, isEven }) => {
    return (
        <div className={`flex flex-col p-5 rounded-3xl capitalize bg-opacity-90 ${isEven ? 'bg-[#D1D3D4] text-black' : 'bg-[#5B2E91] text-white'} min-w-[280px] max-w-[350px]'}`}>
            <div className="font-bold text-[#F99D1C]">{plan}</div>
            <div className="py-2">
                <p className='py-2 text-xs'>{description}</p>
            </div>
            <div className="py-2">
                <h2 className="text-3xl">{price}</h2>
            </div>
            <button className={`bg-transparent text-[#F99D1C] font-semibold py-2 px-4 border-2 border-[#F99D1C] rounded transition-colors hover:bg-[#F99D1C] hover:text-black hover:border-transparent w-full my-2 ${isEven ? 'text-[#5B2E91]' : 'text-[#D1D3D4]'}`}>
                {timeline}
            </button>
            <div className="flex flex-col gap-2">
                {features.map((feature, index) => (
                    <div key={index} className='flex items-center gap-2'>
                        <p className='text-sm'>{feature}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PackageCard;
