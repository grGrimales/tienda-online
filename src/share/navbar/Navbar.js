import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { TbArrowBarToLeft } from "react-icons/tb";
import logo from "../../assets/img/logo.png";
import {useSession} from "../../hooks/useSession";
const navigation = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/products" },
];

const Navbar = () => {
const { sessionIsActive, logout } = useSession();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

useEffect(() => {
  console.log(sessionIsActive)
}, [sessionIsActive]);


  return (
    <header className="absolute inset-x-0 top-0 z-50 text-gray-400 bg-gray-900 body-font">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-violet-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:justify-end lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              exact="true"
              to={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300 text-xl hover:text-gray-600 font-bold"
                  : "text-xl text-neutral-50 font-semibold leading-6 hover:text-gray-600"
              }
            >
              {item.name}
            </NavLink>
          ))}

          {sessionIsActive ? (
       
            <a
            onClick={logout}
            className=" hover:text-red-700 text-gray-200 font-bold rounded flex items-center gap-1 cursor-pointer"
          >
           <TbArrowBarToLeft/> Logout
          </a>
          ) : (
            <NavLink
              exact="true"
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-cyan-300 text-xl hover:text-gray-400 font-bold"
                  : "text-xl text-neutral-50 font-semibold leading-6 hover:text-gray-600"
              }
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
                {sessionIsActive ? (
                  <a
                  onClick={logout}
                    className="-mx-3 cursor-pointer  rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50 flex items-center gap-1"
                  >
                      <TbArrowBarToLeft/> Logout
                  </a>
                ) : (
                  <NavLink
                    exact="true"
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
