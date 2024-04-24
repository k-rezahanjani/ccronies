import { useEffect, useState } from "react";
import CardLogo from "./CardLogo";
import { groq } from "next-sanity";
import { client } from "@/creative-cronies/lib/client";

const Clients = () => {

    const [logo, setLogo] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const fetchItems = async () => {
            try {
                const query = groq`*[_type == 'client']{name, _id, "image": clientLogo.asset -> url}`
                const data = await client.fetch(query);
                if(data && data.length > 0 ) {
                    setLogo(data);
                }
                setLoading(false)
            } catch (error) {
                alert("There is an error due to ", setError(error));
            }
        }
        fetchItems()
    }, [])

    return ( 
        <div className="flex flex-col gap-y-10 bg-[#050708]">
            <div className="text-center mx-auto w-full">
                <h2 className="text-4xl capitalize sm:text-3xl text-white">
                    <span className="text-gray-500">some of</span> the clients we have designed for
                </h2>
            </div>
            <div className="flex flex-row justify-center items-center gap-x-20 pb-10 lg:flex-col lg:gap-y-20 md:flex-col md:gap-y-20">
                {error && error}
                {loading && <h2 className="animate-bounce text-3xl">Loading...</h2>}
                {
                   logo && logo.map(item => (
                        <CardLogo key={item._id} image={item.image} name={item.name} title={item.name}/>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Clients;