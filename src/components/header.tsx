import Image from 'next/image';

import { Navbar } from "@/components/app/navbar";

const Header = () => {
  return (
    <header>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="max-w-[70em] h-[4em] mx-auto flex justify-between pr-3.5">
        <div className="bg-gray-900 px-5 py-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold block">
            <span className="text-gray-200">A</span>
            <span className="text-gray-300">D</span>
            <span className="text-gray-400">C</span>
            <span className="text-orange-600">2023</span>
          </h1>
          <p className="text-gray-500 font-semibold block text-xs mt-[-0.2em]">Melbourne, AU</p>
        </div>
        <div className="flex">
          <Navbar />
        </div>
      </div>
      <div className="h-[500px] w-full absolute top-[4em]">
        <Image
          className="w-full h-full object-cover"
          src="/images/melb.jpg"
          alt=""
          width={2400}
          height={1798}
          priority
        />
      </div>
    </header>
  );
};

export default Header;
