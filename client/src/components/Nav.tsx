import { useState } from "react";
import { Link } from "react-router-dom";
import gmLogo from "../assets/gatheringminds.svg";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openMenu = () => {
    setMobileMenuOpen(true);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6"
        aria-label="Global"
      >
        <div className="nav-brand flex lg:flex-1">
          <Link className="flex gap-2 items-center -m-1.5 p-1.5" to="/">
            <img
              className="brand-logo h-8 w-auto"
              src={gmLogo}
              alt="gathering minds logo"
            />
            <h2 className="brand-name text-xl font-bold text-[#ff5131] hidden md:block">
              Gathering Minds
            </h2>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={openMenu}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="text-black h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:items-center lg:gap-x-6">
          <Link
            to="/about"
            className="text-black p-1.5 rounded-md hover:opacity-50 duration-150 ease-in"
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-black p-1.5 rounded-md hover:opacity-50 duration-150 ease-in"
          >
            Features
          </Link>
          <div className="hidden z-10 lg:flex lg:items-center lg:gap-x-3 lg:flex-1 lg:justify-end">
            <Link
              to="/create-account"
              className="text-black p-1.5 rounded-md hover:opacity-50 duration-150 ease-in"
            >
              Sign Up
            </Link>
            <Link
              to="sign-in"
              className="text-black p-1.5 hover:opacity-50 hover:scale-105 hover:bg-slate-600
            hover:rounded-full hover:text-white duration-150 ease-in"
            >
              Sign In <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </PopoverGroup>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-zinc-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link className="flex gap-2 items-center -m-1.5 p-1.5" to="/">
              <img
                className="brand-logo h-8 w-auto"
                src={gmLogo}
                alt="gathering minds logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="text-white h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  About
                </Link>
                <Link
                  to="/features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  Features
                </Link>
                <Link
                  to="/create-account"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  Sign Up
                </Link>
                <Link
                  to="sign-in"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-zinc-800 duration-150 ease-in"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Nav;

// import { Link } from "react-router-dom";
// import gmLogo from "../assets/gatheringminds.svg";

// const Nav = () => {
//   return (
//     <nav className="nav flex justify-between items-center p-3 pl-4 border-b-[1px]">
//       <div className="nav-brand">
//         <Link className="flex gap-0.2 items-center" to="/">
//           <img className="w-[60px]" src={gmLogo} alt="gathering minds logo" />
//           <h2 className="nav-brand-name hidden md:block text-[#ff5131] text-2xl font-semibold">Gathering Minds</h2>
//         </Link>
//       </div>
//       <ul className="nav-links flex gap-5 text-sm md:text-base">
//         {/* !! all links direct to homepage. change links to appropriate page once implemented !! */}
//         <li className="nav-link-item">
//           <Link className="nav-link hover:opacity-60 duration-100" to="/">Who We Are</Link>
//         </li>
//         <li className="nav-link-item">
//           <Link className="nav-link hover:opacity-60 duration-100" to="/">Features</Link>
//         </li>
//         <li className="nav-link-item">
//           <Link className="nav-link text-white bg-slate-500 hover:bg-slate-400 duration-200 rounded-full p-2.5" to="/">You're Invited</Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// export default Nav;
