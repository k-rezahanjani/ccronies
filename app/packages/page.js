"use client";
import Services from "@/components/Services";
import Image from "next/image";
import React from "react";

const Page = () => {

  return (
    <div className="min-h-screen bg-black flex flex-col">
        <div className="w-full sm:px-8 ps-32 flex items-center pt-40 mb-20 lg:px-6 md:px-6 md:py-12 bg-black">
          <div className="flex flex-col w-1/2 pr-8 md:w-full">
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">That's it</h2>
            <p className=" text-white text-7xl md:text-2xl sm:text-base capitalize">
                best promotion offer
            </p>
          </div>
          <div className="flex w-1/2 justify-end sm:hidden md:hidden">
            <Image src="/images/Isolation_Mode.png" alt="Isolation Mode" width={200} height={200}/>
          </div>
        </div>
        <Services />
        <div className="flex w-full justify-between px-16 my-20">
            <div className="flex-wrap w-2/3 px-20">
                <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">Why choose us?</h2>
                <p className="text-wrap text-white leading-6 md:text-2xl sm:text-base">
                When you collaborate with Creative Cronies Studio, you gain access to a fusion of unparalleled talent, a keen eye for detail, and an unwavering commitment to excellence. We treat every project as a unique canvas, infusing it with passion and originality, resulting in designs that not only stand out but leave a lasting impact.
                </p>
            </div>
        </div>
    </div>
  );
};

export default Page;
