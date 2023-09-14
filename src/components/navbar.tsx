import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon, ChevronDownIcon as SmallChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const CaretLeft = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 256 512" fill="currentColor">
    <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z" />
  </svg>
);

const CaretDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="currentColor">
    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
  </svg>
);



export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmissionOpen, setIsSubmissionOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);
  const [isAttendOpen, setIsAttendOpen] = useState(false);

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
              <Menu.Items className="absolute left-0 z-10 mt-0 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (<Link href="/research-track"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Research Track
                    </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<Link href="/encore-track"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Encore Track
                    </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<Link href="/shepherding-track"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Shepherding Track
                    </Link>)}
                  </Menu.Item>
                </div>
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (<Link href="/call-for-tutorials"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Call for Tutorials
                    </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<Link href="/call-for-workshops"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Call for Workshops
                    </Link>)}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="li" className="relative group">
            <div>
              <Menu.Button className="text-sm font-bold uppercase tracking-wider group-hover:text-orange-600 duration-100 flex items-center px-2.5 py-2 space-x-0.5">
                <span className="sr-only">Program</span>
                <span className="">Program</span>
                <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition as={Fragment}
              enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute left-0 z-10 mt-0 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (<Link href="/program/keynote-talks"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Keynote Talks
                    </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<Link href="/program/tutorials"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Tutorials
                    </Link>)}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="li" className="relative group">
            <div>
              <Menu.Button className="text-sm font-bold uppercase tracking-wider group-hover:text-orange-600 duration-100 flex items-center px-2.5 py-2 space-x-0.5">
                <span className="sr-only">Attend</span>
                <span className="">Attend</span>
                <ChevronDownIcon className="w-4 h-4" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition as={Fragment}
              enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute left-0 z-10 mt-0 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100">
                <div className='px-1 py-1'>
                  <Menu.Item>
                    {({ active }) => (<Link href="/attend/registration"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Registration
                    </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<Link href="/attend/student-travel-grants"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Student Travel Grants
                    </Link>)}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (<Link href="/attend/invitation-letter"
                      className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 font-medium rounded-md')}>
                      Invitation Letter
                    </Link>)}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

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
              <div className="bg-gray-900 px-5 py-1 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold block">
                  <span className="text-gray-200">A</span>
                  <span className="text-gray-300">D</span>
                  <span className="text-gray-400">C</span>
                  <span className="text-orange-600">2023</span>
                </h1>
                <p className="text-gray-500 font-semibold block text-xs mt-[-0.2em]">Melbourne, AU</p>
              </div>
              <div className="h-[4em] flex justify-end w-full">
                <XMarkIcon className="w-12 h-12 pr-4 pt-4 block text-gray-100 hover:text-orange-600 cursor-pointer" onClick={() => setIsOpen(false)} />
              </div>
            </div>

            <div className="flex justify-end w-full">
              <ul className="flex flex-col items-end w-[15rem]">
                <li className="text-sm w-full font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block pr-6 w-full text-end" href="/">Home</Link>
                </li>

                <li className="group w-full">
                  <button className={`py-2 pr-6 text-sm w-full duration-100 font-bold uppercase tracking-wider group-hover:text-orange-600 flex items-center gap-x-1 justify-end ${isSubmissionOpen ? 'text-orange-600' : 'text-gray-100'}`}
                    onClick={() => setIsSubmissionOpen(!isSubmissionOpen)}>
                    {isSubmissionOpen ? <CaretDown aria-hidden="true" /> : <CaretLeft aria-hidden="true" />}
                    <span className="pl-1">Submission</span>
                  </button>
                </li>

                {isSubmissionOpen && (
                  <>
                    <div className="h-[1px] w-full bg-orange-600"></div>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/research-track">Research Track</Link>
                    </li>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/encore-track">Encore Track</Link>
                    </li>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/shepherding-track">Shepherding Track</Link>
                    </li>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/call-for-tutorials">Call for Tutorials</Link>
                    </li>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/call-for-workshops">Call for Workshops</Link>
                    </li>
                  </>
                )}

                <li className="group w-full">
                  <button className={`py-2 pr-6 text-sm w-full duration-100 font-bold uppercase tracking-wider group-hover:text-orange-600 flex items-center gap-x-1 justify-end ${isProgramOpen ? 'text-orange-600' : 'text-gray-100'}`}
                    onClick={() => setIsProgramOpen(!isProgramOpen)}>
                    {isProgramOpen ? <CaretDown aria-hidden="true" /> : <CaretLeft aria-hidden="true" />}
                    <span className="pl-1">Program</span>
                  </button>
                </li>

                {isProgramOpen && (
                  <>
                    <div className="h-[1px] w-full bg-orange-600"></div>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/program/keynote-talks">Keynote Talks</Link>
                    </li>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/program/tutorials">Tutorials</Link>
                    </li>
                  </>
                )}

                <li className="group w-full">
                  <button className={`py-2 pr-6 text-sm w-full duration-100 font-bold uppercase tracking-wider group-hover:text-orange-600 flex items-center gap-x-1 justify-end ${isAttendOpen ? 'text-orange-600' : 'text-gray-100'}`}
                    onClick={() => setIsAttendOpen(!isAttendOpen)}>
                    {isAttendOpen ? <CaretDown aria-hidden="true" /> : <CaretLeft aria-hidden="true" />}
                    <span className="pl-1">Attend</span>
                  </button>
                </li>

                {isAttendOpen && (
                  <>
                    <div className="h-[1px] w-full bg-orange-600"></div>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/attend/registration">Registration</Link>
                    </li>
                    <li className="text-sm w-full font-bold tracking-wide hover:text-orange-600 text-gray-100 duration-100 bg-gray-800">
                      <Link className="py-2 block pr-6 w-full text-end" href="/attend/student-travel-grants">Student Travel Grants</Link>
                    </li>
                  </>
                )}

                <li className="text-sm w-full font-bold uppercase tracking-wider hover:text-orange-600 text-gray-100 duration-100">
                  <Link className="py-2 block pr-6 w-full text-end" href="/organisation">Organisation</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
