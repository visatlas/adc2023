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
                <p className="text-lg">1 - 3 November, 2023</p>
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
            <p className="text-lg">1 - 3 November, 2023</p>
          </div>
          <article className="px-0 lg:px-2 pb-6">
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5">About</h2>
            <p>
              The <span className="font-semibold">Australasian Database Conference (ADC)</span> series is an annual
              forum for sharing the latest research progresses and novel applications of database
              systems, data management, data mining and data analytics for researchers and practitioners in these areas
              from Australia, New Zealand and in the world. The 34th edition of the Australasian Database Conference,
              ADC 2023, will be held in Melbourne, Australia. We welcome contributions related to all aspects of
              database theory and foundation, techniques, and applications.
            </p>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">News</h2>
            <ul className="list-disc list-inside space-y-5">
              <li>
                <strong>24 Feb, 2023:</strong> &nbsp;ADC 2023 has launched a brand-new and exciting track: Encore Track. This track showcases relevant research and promotes interaction among researchers across disciplines. Recently accepted papers by top venues are invited to be presented in the format of posters or lightning talks at ADC 2023. We welcome the database and sibling communities to contribute their published research work to this track for promotion.
              </li>
              <li>
                <span><strong>24 Feb, 2023:</strong> &nbsp;ADC 2023 has launched a brand-new and exciting track: Shepherding Track. This trackaimsat providing pre/early-PhDs and honours/master students with publication opportunities for their research outcomes. This track will enlist early-career researchers as mentors to shepherd students to improve their submissions in a multi-round style. We welcome the database and sibling communities to submit their research work to this track.</span>
                <p className="mt-4">We call for self-nominated shepherd mentor participation. If you are willing to be joining the shepherding committee as an ECR, please contact r.qiu@uq.edu.au</p>
              </li>
            </ul>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">Important Dates</h2>
            <h3 className="font-bold text-xl text-gray-600 mb-4 trackig-wide">Research Paper</h3>
            <ul className="list-disc list-inside">
              <li><strong className="font-semibold">Full Paper Deadline:</strong> &nbsp;15 July, 2023</li>
              <li><strong className="font-semibold">Author Notification:</strong> &nbsp;1 Sep, 2023</li>
              <li><strong className="font-semibold">Camera-Ready Deadline:</strong> &nbsp;15 Sep, 2023</li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Encore Paper</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold">Rotating.</span></li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Conference Dates</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold">ADC 2023 Conference:</span> &nbsp;1 - 3 Nov, 2023</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  </>);
}
