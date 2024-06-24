import { useEffect, useState } from "react";
import CardLogo from "../CardLogo";
import { groq } from "next-sanity";
import { client } from "@/creative-cronies/lib/client";

const Clients = () => {
    const [logos, setLogos] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const query = groq`*[_type == 'client']{name, _id, "image": clientLogo.asset->url}`;
                const data = await client.fetch(query);
                setLogos(data);
            } catch (err) {
                setError(err.message || "An error occurred while fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    return (
        <div className="flex flex-col gap-y-10 bg-black my-20">
            <div className="text-center mx-auto w-full">
                <h2 className="text-4xl capitalize sm:text-3xl text-white">
                    <span className="text-gray-500">some of</span> the clients we have designed for
                </h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-20 lg:flex-col lg:gap-y-20 md:flex-col md:gap-y-20">
                {error && <p className="text-red-500">{error}</p>}
                {loading ? (
                    <h3 className="animate-bounce text-3xl text-white">Loading...</h3>
                ) : (
                    logos.map((item) => (
                        <CardLogo key={item._id} image={item.image} name={item.name} title={item.name} />
                    ))
                )}
            </div>
        </div>
    );
};

export default Clients;
