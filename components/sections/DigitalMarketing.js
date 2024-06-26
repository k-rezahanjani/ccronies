import Image from 'next/image';
import marketingData from '../../marketingData.json';
import Clients from './Clients';

const DigitalMarketing = () => {
  const { marketing } = marketingData || { marketing: [] };

  const topRowItems = marketing.slice(0, 2);
  const bottomRowItems = marketing.slice(2);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black py-10 px-5 -z-40">
      <div className="flex flex-wrap justify-center items-start w-full lg:justify-between">
        {/* Text */}
        <div className="max-w-2xl lg:w-1/2 px-10 md:w-full sm:px-0">
            <h2 className="text-3xl text-[#F99D1C] capitalize mb-4">Graphic Design Services</h2>
            <p className="text-[#C9C9C9] leading-6">
              With a focus on modern aesthetics, minimalism, and cutting-edge design techniques, our
              services cover a wide spectrum of design realms. From crafting iconic logos and brand
              visual identities to developing engaging motion graphics and user-friendly websites, we
              take pride in delivering design solutions that leave a lasting impression.
            </p>
          </div>
        {/* Top row items alongside the text */}
        <div className="flex justify-center flex-wrap items-center md:w-full mt-0 sm:flex-col-reverse">
          {topRowItems.map((item) => (
            <div
              className="bg-[#000] w-52 h-52 p-5 m-2 flex flex-col items-center justify-center rounded-lg"
              key={item.id}
            >
              <Image src={item.image} alt={item.name} width={70} height={70} />
              <p className="text-[#C9C9C9] mt-3 capitalize">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row items */}
      <div className="flex justify-center flex-wrap items-center w-full mt-0">
        {bottomRowItems.map((item) => (
          <div
            className="bg-[#000] w-52 h-52 p-5 m-2 flex flex-col items-center justify-center rounded-lg"
            key={item.id}
          >
            <Image src={item.image} alt={item.name} width={70} height={70} />
            <p className="text-[#C9C9C9] mt-3 capitalize">{item.name}</p>
          </div>
        ))}
      </div>
      <Clients />
      {/* "Let's Talk..." section */}
      <div className="w-full py-20 px-24 md:px-0 md:py-10">
        <p className="text-sm text-[#F99D1C] mb-3 capitalize text-left md:text-center">Want to start a project?</p>
        <h2 className="text-7xl font-extrabold text-white leading-tight md:text-6xl sm:text-5xl sm:leading-tight md:text-center">
          Let’s Talk...
        </h2>
      </div>
    </div>
  );
};

export default DigitalMarketing;
