"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
const PrivateEquityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0A2540"/>
    <path d="M12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7Z" stroke="white" strokeWidth="1.5"/>
    <path d="M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18" stroke="white" strokeWidth="1.5"/>
    
  </svg>
);
const HedgeFundsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#0A2540"/>
    <path d="M12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7Z" stroke="white" strokeWidth="1.5"/>
    <path d="M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18" stroke="white" strokeWidth="1.5"/>
  </svg>
);
const solutions = [
  {
    name: "Hedge Funds",
    description: "Our bread and butter, built from the ground up.",
    href: "/solutions/hedge-funds",
    icon: HedgeFundsIcon,
  },
  {
    name: "Private Equity",
    description: "For private markets, we've got you covered.",
    href: "/solutions/private-equity",
    icon: PrivateEquityIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-20">
      <div className="bg-blue-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white text-center">
            <p className = "font-medium">
              We're releasing full access to Alpharepo for free this earnings
              season!
            </p>
          </div>
        </div>
      </div>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Daloopa</span>
            <img
              alt=""
              src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/64ff023d9f8445370b46f548_Daloopa.svg"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        {/* <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-slate-900 outline-none transition duration-300 ease-in-out hover:text-blue-600 relative nav-item"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onFocus={() => setSolutionsOpen(true)}
                >
                  Solutions
                </PopoverButton>

                <PopoverPanel
                  static
                  className={`absolute -left-8 top-full z-10 mt-3  w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-900/5 transition-all duration-300 ease-out ${
                    solutionsOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  onBlur={() => setSolutionsOpen(false)}
                >
                  <div className="p-4">
                    {solutions.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-slate-50"
                      >
                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-slate-600 group-hover:text-blue-600"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            className="block font-semibold text-slate-900"
                          >
                            {item.name}
                            <span className="absolute inset-0"></span>
                          </Link>
                          <p className="mt-1 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-slate-900/5 bg-slate-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-slate-900 hover:bg-slate-100"
                      >
                        <item.icon
                          aria-hidden="true"
                          className="h-5 w-5 flex-none text-slate-400"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Link
            to="/product"
            className="text-sm font-semibold leading-6 text-slate-900 outline-none transition duration-300 ease-in-out hover:text-blue-600"
          >
            Product
          </Link>
          <Link
            to="/resources"
            className="text-sm font-semibold leading-6 text-slate-900 outline-none transition duration-300 ease-in-out hover:text-blue-600"
          >
            Resources
          </Link>
        </PopoverGroup> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-slate-900 outline-none transition duration-300 ease-in-out hover:text-blue-600"
          >
            <div>
              <a
                className="text-slate-900 items-center text-sm justify-center whitespace-nowrap py-3 px-6 flex w-fit max-w-full border-2 border-slate-400 border-solid rounded-full bg-white/[0.5]"
                href="https://marketplace.daloopa.com/login"
                id="a-1"
              >
                <div className="cursor-pointer">Start for Free</div>
              </a>
            </div>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Daloopa</span>
                <img
                  alt=""
                  src="https://cdn.prod.website-files.com/64faf7af7272982ba5250006/64ff023d9f8445370b46f548_Daloopa.svg"
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-slate-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-500/10">
                <div className="space-y-2 py-6">
                  {solutions.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-slate-50 group-hover:bg-white">
                        <item.icon
                          aria-hidden="true"
                          className="h-6 w-6 text-slate-600 group-hover:text-blue-600"
                        />
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  <Link
                    to="/product"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                  >
                    Product
                  </Link>
                  <Link
                    to="/resources"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                  >
                    Resources
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-50"
                  >
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 divide-x divide-slate-900/5 bg-slate-50 text-center">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 text-base font-semibold leading-7 text-slate-900 hover:bg-slate-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
