import { NavLink } from 'react-router-dom';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/products' },
]


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    // <nav className="bg-gray-800 p-4">
    //   <div className="container mx-auto">
    //     <div className="flex items-center justify-between">
    //       <div className="text-white font-bold text-xl">Mi Ecommerce</div>
    //       <ul className="flex space-x-4">
    //         <li>
    //           <NavLink
    //        exact= 'true'
    //             to="/"
    //          className={({isActive})=> isActive ? 'text-blue-400 hover:text-gray-400' : 'text-blue-200'}
    //           >
    //             Inicio
    //           </NavLink>
    //         </li>
    //         <li>
    //           <NavLink
    //             to="/products"
    //             className={({isActive})=> isActive ? 'text-blue-400 hover:text-gray-400' : 'text-blue-200'}

    //           >
    //             Productos
    //           </NavLink>
    //         </li>
    //         {/* Agrega más elementos del menú si es necesario */}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <header className="absolute inset-x-0 top-0 z-50 bg-gray-800 p-4">
    <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
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
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <a  key={item.name}  >
            <NavLink 
                   exact= 'true'
                    to={item.href}
                     className={({isActive})=> isActive ? 'text-cyan-300 text-xl hover:text-gray-400 font-bold' : 'text-xl text-neutral-50 font-semibold leading-6'}
                      >
                        {item.name}
             </NavLink>
            </a>
        ))}
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" className="leading-6 text-cyan-300 text-xl hover:text-gray-400 font-bold">
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </nav>
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
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
            </div>
            <div className="py-6">
              <a
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
    
  );
};

export default Navbar;



