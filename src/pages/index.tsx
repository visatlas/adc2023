import Image from 'next/image';

import { Navbar } from '@/components/navbar';
import SEO from '@/components/seo';

export default function Home() {
  return (<>
    <SEO />
    <main className="bg-gray-200">
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
      <div className="relative max-w-[70em] mx-auto pr-3.5">
        <div className="flex items-start">
          <h1 className="text-3xl font-bold font-sans bg-gray-900 text-gray-100 inline-block p-5 z-10">
            <span className="text-orange-600">2023</span><br />
            <span className="text-gray-200">A</span>ustralasian<br />
            <span className="text-gray-300">D</span>atabase<br />
            <span className="text-gray-400">C</span>onference<br />
          </h1>
          <div className="w-full flex flex-col items-end">
            <Navbar />
            <div className="relative hidden md:block">
              <h3 className="inline-block text-gray-100/70 text-[6em] font-extrabold tracking-tight absolute right-0 top-0 select-none cursor-default">
                ADC2023
              </h3>
              <div className="text-gray-800 relative mt-8 flex flex-col items-end mr-2.5">
                <h2 className="font-bold tracking-wide text-2xl">Melbourne, Australia</h2>
                <p className="">Melbourne Connect</p>
                <p className="text-lg">27 - 29 October, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[20em] bg-gray-100 md:bg-gray-100/90 max-w-[70em] mx-auto">
        <div className="px-5 pt-4 pb-6">
          <div className="text-gray-800 flex-col mb-10 flex md:hidden">
            <h2 className="font-bold tracking-wide text-2xl">Melbourne, Australia</h2>
            <p className="">Melbourne Connect</p>
            <p className="text-lg">27 - 29 October, 2023</p>
          </div>
          <article className="">

            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5">About</h2>
            <p>The <span className="font-semibold">Australasian Database Conference (ADC)</span> series is an annual forum for sharing the latest research progresses and novel applications of database systems, data management, data mining and data analytics for researchers and practitioners in these areas from Australia, New Zealand and in the world. The 34th edition of the Australasian Database Conference, ADC2023, will be held in Melbourne, Australia.
            </p>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">News</h2>
            <p>To be announced.</p>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">Important Dates</h2>
            <h3 className="font-bold text-xl text-gray-600 mb-4 trackig-wide">Research Paper</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold">Full Paper Deadline:</span> 15 May, 2023</li>
              <li><span className="font-semibold">Author Notification:</span> 1 July, 2023</li>
              <li><span className="font-semibold">Camera-Ready Deadline:</span> 22 July, 2023</li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Encore Paper</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold">Rotating.</span></li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Conference Dates</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold">ADC2023 Conference:</span> 27 - 29 October, 2023</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  </>);
}
