import { Disclosure, Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.jpeg";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "About Us", to: "/aboutUs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div>
      <Disclosure as="nav" className="bg-lime-50 nav-overlay">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-green-400 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-12 w-auto lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-12 w-auto lg:block mr-96"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className={classNames(
                            item.current
                              ? "bg-green-900 text-white"
                              : "text-black hover:bg-green-700 hover:text-white",
                            "px-3 py-2 rounded-md text-xl font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* login dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button>
                        <Link
                          className="rounded border border-green-600 px-4 py-2 text-sm font-medium text-black hover:bg-green-400 hover:text-white focus:outline-none focus:ring active:bg-green-400 lg:inline-block hidden"
                          to="/login"
                        >
                          Login/Registration
                        </Link>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      {/* <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to=""
                              className={classNames(
                                active ? "bg-green-100" : "",
                                "block px-4 py-2 text-sm text-green-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to=""
                              className={classNames(
                                active ? "bg-green-100" : "",
                                "block px-4 py-2 text-sm text-green-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </Menu.Items> */}
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 py-2 h-auto">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    to={item.to}
                    className={classNames(
                      item.current
                        ? "bg-green-900 text-white"
                        : "text-black hover:bg-green-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Link
                  className="inline-block rounded border border-green-500 px-4 py-2 text-sm font-medium text-black hover:bg-green-400 hover:text-white focus:outline-none focus:ring active:bg-green-400"
                  to="/login"
                >
                  Login/Registration
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
