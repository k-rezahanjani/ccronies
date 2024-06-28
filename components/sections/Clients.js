import CardLogo from "../CardLogo";
import data from "/data/clients.json";

const Clients = () => {
    return (
        <div className="flex flex-col gap-y-10 bg-black my-20">
            <div className="text-center mx-auto w-full">
                <h2 className="text-4xl capitalize sm:text-3xl text-white">
                    <span className="text-gray-500">some of</span> the clients we have designed for
                </h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-20 lg:flex-col lg:gap-y-20 md:flex-col md:gap-y-20">
                {
                    data.clients.map((item) => (
                        <CardLogo key={item.id} image={item.image} name={item.name} title={item.name} />
                    ))
                }
            </div>
        </div>
    );
};

export default Clients;
