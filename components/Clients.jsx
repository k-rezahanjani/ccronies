import CardLogo from "./CardLogo";

const clientLogo = [
    {
        id: 1,
        name: 'asiatech',
        image: '/images/logos/asiatech.png'
    },
    {
        id: 2,
        name: 'polymet',
        image: '/images/logos/polymet.png'
    },
    {
        id: 3,
        name: 'chizcast',
        image: '/images/logos/chizcast.png'
    },
    {
        id: 4,
        name: 'biodent',
        image: '/images/logos/biodent.png'
    },
]

const Clients = () => {
    return ( 
        <div className="flex flex-col gap-y-10">
            <div className="text-center mx-auto w-full">
                <h2 className="text-4xl capitalize sm:text-3xl">
                    <span className="text-gray-500">some of</span> the clients we have designed for
                </h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-20 pb-10 lg:flex-col lg:gap-y-20 md:flex-col md:gap-y-20">
                {
                    clientLogo.map(item => (
                        <CardLogo key={item.id} image={item.image} title={item.name} />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Clients;