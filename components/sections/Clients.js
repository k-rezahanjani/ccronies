import CardLogo from "../CardLogo";
import data from "/data/clients.json";

const Clients = () => {
    return (
        <div className="flex flex-col gap-y-10 bg-black my-20 px-5">
            <div className="text-center mx-auto">
                <h2 className="text-4xl capitalize sm:text-3xl text-white">
                    <span className="text-gray-500">some of</span> the clients we have designed for
                </h2>
            </div>
            {/* Logo */}
            <div className="flex flex-row items-center gap-x-10 overflow-x-scroll">
                {
                    data.clients.map((item) => (
                        <CardLogo image={item.image} name={item.name} title={item.name}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Clients;
