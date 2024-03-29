import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="max-w-[70em] mx-auto pt-8 pb-32 w-full">
      <div className="mx-5 flex flex-col md:flex-row gap-y-2 lg:px-0 items-start justify-between text-gray-600">
        <small className=""><span className="font-defaultSans">&copy;</span> 1990-2023 Australasian Database Conference. <br className="block sm:hidden" />All Rights Reserved.<span className={`mt-2 ${pathname === '/' ? 'block' : 'hidden'}`}> Cover photo by Dmitry Osipenko on Unsplash.</span>
        </small>
        <small>
          <a href="https://dblp.uni-trier.de/db/conf/adc/index.html" target="_blank" rel="noreferrer"
            className="hover:underline flex space-x-1 items-center">
            <span>Previous Conferences</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
              <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
            </svg>
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
