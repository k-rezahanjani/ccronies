"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Card from "@/components/Card";
import { client } from "@/creative-cronies/lib/client";
import { groq } from "next-sanity";

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const query = groq`*[_type == 'founders']{name, _id, title, "image": founders.asset->url, description}`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setData(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Hero section */}
      <div className="flex w-full justify-between">
        <div className="w-full sm:px-8 ps-32 flex flex-row items-center">
          <div className="flex flex-col w-1/2 pr-8">
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">Who we are?</h2>
            <p className="text-wrap text-white leading-6 md:text-6xl sm:text-4xl">
              We are Creative Cronies, With years of experience in the design industry. Our journey began as close friends and creative comrades. Our shared love for modern, minimal, and imaginative design fueled our ambition to establish our design sanctuary.
            </p>
          </div>
          <div className="flex w-1/2 justify-end">
            <Image src="/images/Layer_1.png" alt="Hero Image" width={500} height={500} className="w-full max-w-xs" />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col mt-8 px-32">
        <p className="text-white text-4xl font-bold mb-8">
          <span className="text-[#F99D1C]">Meet</span>
          <br />
          Creative Cronies Founders.
        </p>
        <div className="flex flex-row justify-between gap-4">
            {loading && <h2 className="animate-bounce text-3xl">Loading...</h2>}
            {data && data.map((item) => (
                <Card key={item._id} image={item.image} name={item.name} title={item.title}/>
            ))}
        </div>
      </div>
      {/* What do we do */}
      <div className="flex flex-wrap w-full justify-between my-20">
        <div className="w-full sm:px-8 px-32 flex flex-row items-center">
          <div className="flex flex-col w-1/2 pr-8">
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">What do we do?</h2>
            <p className="text-wrap text-white leading-6 md:text-6xl sm:text-4xl">
              At Creative Cronies Studio, our specialized services encompass a wide array of design realms. From crafting eye-catching logos that embody brand identities to conceptualizing awe-inspiring motion graphics that breathe life into your visual storytelling, we revel in every design challenge that comes our way. Whether it's curating brand visual identities, creating stunning UI designs, or crafting seamless web designs, we strive to exceed expectations with every project we undertake.
            </p>
          </div>
          <div className="flex w-1/2 justify-end">
            <Image src="/images/what-we-do.png" alt="What We Do" width={500} height={500} className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
