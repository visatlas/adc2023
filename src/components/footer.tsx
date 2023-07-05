import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="max-w-[70em] mx-auto pt-8 pb-32 w-full">
      <div className="mx-5 flex flex-col-reverse md:flex-row lg:px-0 items-start justify-between text-gray-600">
        <small className=""><span className="font-defaultSans">&copy;</span> 2023 Australasian Database Conference. All Rights Reserved.<span className={pathname === '/' ? 'block' : 'hidden'}> Cover photo by Dmitry Osipenko on Unsplash.</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
