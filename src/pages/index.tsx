import Image from 'next/image';
import Link from 'next/link';

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
            <p className="mb-4">
              The <span className="font-semibold">Australasian Database Conference (ADC)</span> series is an annual
              forum for sharing the latest research progresses and novel applications of database
              systems, data management, data mining and data analytics for researchers and practitioners in these areas
              from Australia, New Zealand and in the world. The 34th edition of the Australasian Database Conference,
              ADC 2023, will be held in Melbourne, Australia. We welcome contributions related to all aspects of
              database theory and foundation, techniques, and applications.
            </p>
            <p className="font-semibold">You can view the ADC 2023 posters here: <a className="underline text-sky-700" href="/ADC 2023 Poster.pdf" target="_blank" rel="noreferrer">PDF version</a>, <a className="underline text-sky-700" href="/ADC 2023 Poster.png" target="_blank" rel="noreferrer">PNG version</a>.</p>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">News</h2>
            <ul className="list-disc list-inside space-y-5">
              <li>
                <strong>10 Aug, 2023:</strong> &nbsp;Research and Demo Paper deadlines have been further <span className="font-semibold">extended to 14 August, 2023</span>.
              </li>
              <li>
                <strong>5 Aug, 2023:</strong> &nbsp;<span className="font-semibold">ADC-23 & CIRES PhD School Travel Grants</span> are available for Australian based students who live outside Melbourne, to subsidise travel and up to 5-nights accommodation to attend both the CIRES PhD School and the Australasian Database Conference. Deadline for applications is 7 September 2023. View more on the <Link className="underline" href="/attend/student-travel-grants">Student Travel Grants page</Link>.
              </li>
              <li>
                <strong>24 Jul, 2023:</strong> &nbsp;Research and Demo Paper deadlines have been <span className="font-semibold">extended to 11 August, 2023</span>.
              </li>
              <li>
                <strong>24 Jul, 2023:</strong> &nbsp;Clarifying the timezones for all submission deadlines. We have become more lenient with the paper length limit for submissions, changing it from 12 pages including all references to 12 pages excluding any references.
              </li>
              <li>
                <strong>24 Feb, 2023:</strong> &nbsp;ADC 2023 has launched a brand-new and exciting track: <span className="font-semibold">Encore Track</span>. This track showcases relevant research and promotes interaction among researchers across disciplines. Recently accepted papers by top venues are invited to be presented in the format of posters or lightning talks at ADC 2023. We welcome the database and sibling communities to contribute their published research work to this track for promotion.
              </li>
              <li>
                <span><strong>24 Feb, 2023:</strong> &nbsp;ADC 2023 has launched a brand-new and exciting track: <span className="font-semibold">Shepherding Track</span>. This track aims at providing pre/early-PhDs and honours/master students with publication opportunities for their research outcomes. This track will enlist early-career researchers as mentors to shepherd students to improve their submissions in a multi-round style. We welcome the database and sibling communities to submit their research work to this track.</span>
                <p className="mt-4">We call for self-nominated shepherd mentor participation. If you are willing to be joining the shepherding committee as an ECR, please contact r.qiu@uq.edu.au</p>
              </li>
            </ul>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">Important Dates</h2>
            <p>All submission deadlines are at 23:59 in <a className="underline" href="https://www.timeanddate.com/time/zones/aest" target="_blank" rel="noreferrer">Australian Eastern Standard Time (UTC+10)</a>.</p>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Research Paper</h3>
            <ul className="list-disc list-inside">
              <li>
                <strong className="font-semibold md:w-52 md:inline-block">Full Paper Deadline:</strong> &nbsp;14 Aug, 2023&nbsp;&nbsp;<span className="line-through text-gray-400">11 Aug, 2023</span>&nbsp;&nbsp;<span className="line-through text-gray-400">1 Aug, 2023</span></li>
              <li><strong className="font-semibold md:w-52 md:inline-block">Author Notification:</strong> &nbsp;5 Sep, 2023&nbsp;&nbsp;<span className="line-through text-gray-400">1 Sep, 2023</span></li>
              <li><strong className="font-semibold md:w-52 md:inline-block">Camera-Ready Deadline:</strong> &nbsp;15 Sep, 2023</li>
              <li><strong className="font-semibold md:w-52 md:inline-block">Registration Deadline:</strong> &nbsp;30 Sep, 2023</li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Encore Paper</h3>
            <ul className="list-disc list-inside">
              <li><strong className="font-semibold md:w-52 md:inline-block">Submission Deadline:</strong> &nbsp;1 Sep, 2023</li>
              <li><strong className="font-semibold md:w-52 md:inline-block">Registration Deadline:</strong> &nbsp;30 Sep, 2023</li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Shepherding Paper</h3>
            <ul className="list-disc list-inside">
              <li><strong className="font-semibold md:w-52 md:inline-block">Submission Deadline:</strong> &nbsp;1 Aug, 2023&nbsp;&nbsp;
                {/* <span className="py-0.5 px-2 rounded-full bg-gray-300 text-gray-600 font-sans font-medium text-xs">Updated</span> */}
              </li>
              <li><strong className="font-semibold md:w-52 md:inline-block">Camera-Ready Deadline:</strong> &nbsp;15 Sep, 2023</li>
              <li><strong className="font-semibold md:w-52 md:inline-block">Registration Deadline:</strong> &nbsp;30 Sep, 2023</li>
            </ul>
            <h3 className="font-bold text-xl text-gray-600 mb-4 mt-6 trackig-wide">Conference Dates</h3>
            <ul className="list-disc list-inside">
              <li><span className="font-semibold md:w-52 md:inline-block">ADC 2023 Conference:</span> &nbsp;1 - 3 Nov, 2023</li>
            </ul>
          </article>
        </div>
      </div>
    </main>
  </>);
}
