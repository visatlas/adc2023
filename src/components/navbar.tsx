import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="h-[4em] hidden md:flex items-center justify-end w-full text-gray-900">
        <ul className="flex justify-center h-full items-center">
          <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 duration-100">
            <Link className="px-2.5 py-2" href="/">Home</Link>
          </li>

          <Menu as="li" className="relative ml-3 group">
            <div>
              <Menu.Button className="text-sm font-bold uppercase tracking-wider group-hover:text-orange-600 duration-100 flex items-center px-2.5 py-2 space-x-0.5">
                <span className="sr-only">Submission</span>
                <span className="">Submission</span>
                <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition as={Fragment}
              enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute left-0 z-10 mt-0 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (<Link href="/main-track"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium')}>
                    Main Track
                  </Link>)}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (<Link href="/encore-track"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium')}>
                    Encore track
                  </Link>)}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (<Link href="/shepherding-track"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium')}>
                    Shepherding track
                  </Link>)}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>

          <li className="text-sm font-bold uppercase tracking-wider text-gray-600 hidden md:block pointer-events-none">
            <span className="px-2.5 py-2">Program</span>
          </li>
          <li className="text-sm font-bold uppercase tracking-wider text-gray-600 hidden md:block pointer-events-none">
            <span className="px-2.5 py-2">Attend</span>
          </li>
          <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 duration-100">
            <Link className="px-2.5 py-2" href="/organisation">Organisation</Link>
          </li>
        </ul>
      </nav>

      <nav className="h-[4em] flex md:hidden">
        <Bars3Icon className="w-8 h-8 m-auto hover:text-orange-600 cursor-pointer" onClick={() => setIsOpen(true)} />
        {isOpen && (
          <div className="absolute top-0 left-0 z-10 bg-gray-900 w-full pb-4">
            <div className="flex">
              <div className="bg-gray-900 px-5 py-1 flex space-x-2 items-center justify-center">
                <h1 className="text-3xl font-bold block">
                  <span className="text-gray-200">A</span>
                  <span className="text-gray-300">D</span>
                  <span className="text-gray-400">C</span>
                  <span className="text-orange-600">2023</span>
                </h1>
              </div>
              <div className="h-[4em] flex justify-end w-full">
                <XMarkIcon className="w-12 h-12 pr-4 pt-4 block text-gray-100 hover:text-orange-600 cursor-pointer" onClick={() => setIsOpen(false)} />
              </div>
            </div>
            <div className="">
              <ul className="flex flex-col items-end pr-6">
                <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block" href="/">Home</Link>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider text-gray-600 pointer-events-none">
                  <span className="py-2 block">Program</span>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block" href="/main-track">Main Track</Link>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block" href="/encore-track">Encore Track</Link>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block" href="/shepherding-track">Shepherding Track</Link>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider text-gray-600 pointer-events-none">
                  <span className="py-2 block">Attend</span>
                </li>
                <li className="text-sm font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block" href="/organisation">Organisation</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
