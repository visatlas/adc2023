import Image from 'next/image';

export default function Home() {
  return (
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
      <div className="relative max-w-[70em] mx-auto pr-5">
        <div className="flex items-start">
          <h1 className="text-3xl font-bold font-sans bg-gray-900 text-gray-100 inline-block p-5 z-10">
            <span className="text-orange-600">2023</span><br />
            <span className="text-gray-200">A</span>ustralasian<br />
            <span className="text-gray-300">D</span>atabase<br />
            <span className="text-gray-400">C</span>onference<br />
          </h1>
          <div className="w-full flex flex-col items-end">
            <nav className="h-[4em] flex items-center justify-end w-full">
              <ul className="flex justify-center h-full space-x-5 items-center">
                <li className="text-sm font-bold uppercase tracking-wider">
                  <a href="#">Home</a>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider">
                  <a href="#">Submission</a>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider">
                  <a href="#">Program</a>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider">
                  <a href="#">Attend</a>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider">
                  <a href="#">Organisation</a>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider">
                  <a href="#">Sponsors</a>
                </li>
              </ul>
            </nav>
            <div className="relative">
              <h3 className="inline-block text-gray-100/70 text-[5em] font-extrabold tracking-tight absolute right-0 top-0">
                ADC2023
              </h3>
              <div className="text-gray-800 relative mt-8 flex flex-col items-end">
                <h2 className="font-bold tracking-wide text-2xl">
                  Melbourne, Australia
                </h2>
                <p>September, 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-[20em] bg-gray-100/90 max-w-[70em] mx-auto">
        <div className="px-5 pt-4 pb-6">
          <article className="">
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5">About</h2>
            <p>The <span className="font-semibold">Australasian Database Conference</span> series is an annual forum for sharing the latest research progresses and novel applications of database systems, data management, data mining and data analytics for researchers and practitioners in these areas from Australia, New Zealand and in the world. The 33rd edition of the Australasian Database Conference, ADC 2023, will be held in Melbourne, Australia.
            </p>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">News</h2>
            <p>To be announced.
            </p>
            <h2 className="uppercase text-3xl font-bold text-orange-600 tracking-wide mb-5 mt-12">Important Dates</h2>
            <p>To be announced.
            </p>
          </article>
        </div>



      </div>

      <div className="max-w-[70em] mx-auto pt-8 pb-6">
        <div className="mx-5 flex flex-col-reverse md:flex-row lg:px-0 items-start justify-between text-gray-600">
          <small className=""><span className="font-defaultSans">&copy;</span> 2023 Australasian Database Conference. <br className="block sm:hidden" />
            All Rights Reserved.
          </small>
          {/* <small className="mb-3 md:mb-0"><a className="hover:underline"
            href="https://www.acm.org/about-acm/policy-against-harassment" target="_blank"
            rel="noreferrer">Code of Conduct</a></small> */}
        </div>
      </div>
    </main>
  );
}
