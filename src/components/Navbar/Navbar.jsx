import React from "react";
import logo from "./../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Menu from "../../data/menu.json";
import DropdownLinks from "../../data/DropdownLinks.json";

const Navbar = ({ handleOrderPopup }) => {
  return (
    <nav
      className="shadow-md bg-white dark:bg-gray-900 dark:text-white
    duration-200 relative z-40"
    >
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* logo */}
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="Logo" className="w-10 uppercase" />
              Shopsy
            </a>
          </div>
          {/* search bar  */}
          <div className="flex items-center justify-between gap-4">
            <div className="group relative hidden sm:block">
              <input
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
                duration-300 rounded-full border border-gray-300 px-2 py-1 outline-none
                focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                type="text"
                placeholder="Search"
              />
              <IoMdSearch
                className="text-gray-500 group-hover:text-primary absolute
              top-1/2 -translate-y-1/2 right-3"
              />
            </div>
            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary 
              transition-all duration-200 text-white py-1 
              px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping
                className="text-xl text-white drop-shadow-sm
              cursor-pointer"
              />
            </button>
            {/* Darkmode switch */}
            <div>
              <DarkMode />
            </div>
          </div>
          <div></div>
        </div>
      </div>

      {/* lower Navbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Simple Dropdown and links */}
          <li className="group relative cursor-pointer hover:text-primary duration-200">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown
                  className="transition-all duration-200 
                group-hover:rotate-180"
                />
              </span>
            </a>
            <div
              className="absolute z-50 hidden group-hover:block rounded-md bg-white
            p-2 text-black w-[200px] shadow-md dark:bg-gray-800 dark:text-white"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="  inline-block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
