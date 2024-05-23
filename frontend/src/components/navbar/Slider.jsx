import { Fragment } from "react";

//Headless UI imports
import { Dialog, Transition } from "@headlessui/react";

import { ReactComponent as Close } from "../../assets/shared/tablet/xmark-solid.svg";

//React Router Imports
import { Link } from "react-router-dom";

export default function Slider({ open, setOpen }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-color2 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -ml-8 flex pr-4 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="relative rounded-md"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>
                        <Close
                          className="h-6 w-6 fill-color6  shadow-xl"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-color2 border-r-2 border-border py-6 shadow-xl">
                    <div className="w-full flex items-center justify-center relative mt-6 flex-1 px-4 sm:px-6">
                      <ul className="flex flex-col justify-center items-center gap-6 text-color6">
                        <li>
                          <button className="sub-title hover:text-color1">
                            <Link to="/">Home</Link>
                          </button>
                        </li>
                        <li>
                          <button className="sub-title hover:text-color1">
                            <Link to="/headphones">Headphones</Link>
                          </button>
                        </li>
                        <li>
                          <button className="sub-title hover:text-color1">
                            <Link to="/speakers">Speakers</Link>
                          </button>
                        </li>
                        <li>
                          <button className="sub-title hover:text-color1">
                            <Link to="/earphones">Earphones</Link>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
