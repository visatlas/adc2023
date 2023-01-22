import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="h-[4em] flex items-center justify-end w-full text-gray-900">
      <ul className="flex justify-center h-full items-center">
        <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 duration-100">
          <Link className="px-2.5 py-2" href="/">Home</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider text-gray-600">
          <Link className="px-2.5 py-2" href="/">Submission</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider text-gray-600">
          <Link className="px-2.5 py-2" href="/">Program</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider text-gray-600">
          <Link className="px-2.5 py-2" href="/">Attend</Link>
        </li>
        <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 duration-100">
          <Link className="px-2.5 py-2" href="/organisation">Organisation</Link>
        </li>
        {/* <li className="text-sm font-bold uppercase tracking-wider text-gray-600">
          <Link className="px-2.5 py-2" href="/">Sponsors</Link>
        </li> */}
      </ul>
    </nav>
  );
};
