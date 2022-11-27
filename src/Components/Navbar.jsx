import React from 'react'
import { useState } from "react";
import { Transition } from "@headlessui/react";
import "./Navbar.css"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [isLogin, setIsLogin] = useState()

    return (
        <div>
          <nav style={{backgroundColor : '#1B97CC'}}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <h1 className='text-white text-3xl font-extrabold '>SapaSikolog.com</h1>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-20 flex items-baseline space-x-4">
                      <a
                        href="/"
                        className=" hover:bg-sky-300 text-white px-2 py-1 rounded-md text-lg font-medium"
                      >
                        Home
                      </a>
    
                      <a
                        href="#"
                        className="text-white hover:bg-sky-300 hover:text-white px-2 py-1 rounded-md text-lg font-medium"
                      >
                        Test
                      </a>
    
                      <a
                        href="#"
                        className="text-white hover:bg-sky-300 hover:text-white px-2 py-1 rounded-md text-lg font-medium"
                      >
                        Articel
                      </a>
    
                      <a
                        href="#"
                        className="text-white hover:bg-sky-300 hover:text-white px-2 py-1 rounded-md text-lg font-medium"
                      >
                        Psikolog
                      </a>

                      <a
                        href="\about"
                        className="text-white hover:bg-sky-300 hover:text-white px-2 py-1 rounded-md text-lg font-medium"
                      >
                        About Us
                      </a>
    
                      <button
                        href="#"
                        className="text-white ml-5 outline outline-1 hover:bg-sky-700 hover:text-white px-4 py-1 rounded-md text-lg font-medium"
                      >
                        Masuk
                      </button>
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="sr-only ">Open main menu</span>
                    {!isOpen ? (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
    
            <Transition
              show={isOpen}
              enter="transition ease-out duration-100 transform"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-75 transform"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              {(open) => (
                <div className="md:hidden ml-4">
                  <div open={open} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                    <a
                      href="/"
                      className="text-white hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Home
                    </a>
    
                    <a
                      href="#"
                      className="text-white hover:bg-cyan-500 hover:text-white block px-4 py-2 rounded-md text-base font-medium"
                    >
                      Test
                    </a>
    
                    <a
                      href="#"
                      className="text-white hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Articel
                    </a>
    
                    <a
                      href="#"
                      className="text-white hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Psikolog
                    </a>

                    <a
                      href="\about"
                      className="text-white hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      About Us
                    </a>
    
                    <button
                      href="#"
                      className="outline outline-2 text-white hover:bg-cyan-500 hover:text-white block px-3 py-2 rounded-md text-center font-medium"
                    >
                      Masuk
                    </button>
                  </div>
                </div>
              )}
            </Transition>
          </nav>
        </div>
      );
}

export default Navbar