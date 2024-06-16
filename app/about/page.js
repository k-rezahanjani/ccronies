"use client";
import About from "@/components/About";
import Clients from "@/components/Clients";
import React from "react";

const Page = () => {
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
            <img src="/images/Layer_1.png" className="w-full max-w-xs" />
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
          {/* Card 1 */}
          <div className="flex flex-row w-1/2 bg-[#5F2F8E] p-2 overflow-hidden">
            <div className="w-1/3">
              <img src="/images/saba.png" alt="Saba Ebrahimi" className="object-cover h-full w-full" />
            </div>
            <div className="flex flex-col w-2/3 p-4">
              <h3 className="text-white font-bold text-xl">Saba Ebrahimi</h3>
              <h4 className="text-[#F99D1C] text-lg mb-2">Senior Graphic Designer</h4>
              <p className="text-wrap text-white text-sm">
                Hi, I'm a creative advertising designer with a demonstrated history of working in digital marketing.
                Skilled in Design, Motion Graphics, Branding, and Print. I've got a master's degree from the University of Science and Culture.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex flex-row w-1/2 bg-[#5F2F8E] p-2 overflow-hidden">
            <div className="w-1/3">
              <img src="/images/tara.png" alt="Tara Nabatian" className="object-cover h-full w-full" />
            </div>
            <div className="flex flex-col w-2/3 p-4">
              <h4 className="text-white font-bold text-xl">Tara Nabatian</h4>
              <h4 className="text-[#F99D1C] text-lg mb-2">Senior Graphic Designer</h4>
              <p className="text-wrap text-white text-sm">
                Hi, I'm a creative designer with expertise in logo and branding design. I hold a bachelor's degree from the university of Science and Culture.
                I'm passionate about crafting compelling visual identities that capture your brand's essence.
              </p>
            </div>
          </div>
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
            <img src="/images/what-we-do.png" className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
