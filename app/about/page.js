"use client";
import Image from "next/image";
// import Card from "@/components/Card";
import FoundersList from "@/components/FoundersList";

// const Card = React.lazy(() => import('@/components/Card'));

const Page = () => {

  return (
    <div className="min-h-screen bg-black flex flex-wrap">
      {/* Hero section */}
      <div className="flex w-full justify-between">
        <div className="w-full sm:px-8 ps-32 py-40 flex items-center lg:px-6 md:px-6 md:py-12 bg-black">
          <div className="flex flex-col w-1/2 pr-8 md:w-full">
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">Who we are?</h2>
            <p className="text-wrap text-white leading-6 md:text-2xl sm:text-base">
              We are Creative Cronies, With years of experience in the design industry. Our journey began as close friends and creative comrades. Our shared love for modern, minimal, and imaginative design fueled our ambition to establish our design sanctuary.
            </p>
          </div>
          <div className="flex w-1/2 justify-end sm:hidden md:hidden">
            <Image src="/images/Layer_1.png" alt="Hero Image" width={250} height={250} />
          </div>
        </div>
      </div>
      {/* Text */}
      <div className="flex flex-col mt-8 px-32 md:px-6 lg:px-6">
        <p className="text-white text-4xl font-bold mb-8">
          <span className="text-[#F99D1C]">Meet</span>
          <br />
          Creative Cronies Founders.
        </p>
        <FoundersList />
      </div>
      {/* What do we do */}
      <div className="flex flex-wrap w-full justify-between my-20">
        <div className="w-full sm:px-8 px-32 flex flex-row items-center md:px-6 md:flex-col lg:px-6 sm:flex-col-reverse">
          <div className="flex flex-col w-1/2 pr-8 md:w-full">
            <h2 className="text-lg text-[#F99D1C] mb-3 font-bold">What do we do?</h2>
            <p className="text-wrap text-white leading-6 md:text-2xl sm:text-base">
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
