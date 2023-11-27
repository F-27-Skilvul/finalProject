import React, { useContext } from "react";
import DropdownMenu from "./dropdownMenu";
import { AppContext } from "../../context/app-provider";
import { NavLink } from "react-router-dom";

function Hamburger() {
  const { dropdownActive, setDropdownActive } = useContext(AppContext);

  const handleDropdown = (e) => {
    e.preventDefault();

    setDropdownActive(!dropdownActive);

    console.log(dropdownActive);
  };

  return (
    <>
      <div className="flex items-center">
        {/* btn login and register */}
        <div className="flex flex-row">
          <button className="p-1">
            <NavLink
              to="/daftar"
              className="border-1 border-1 mb-3 rounded-xl border-primary bg-white py-3 px-6 text-base font-semibold text-black transition duration-500 hover:opacity-80 hover:shadow-lg lg:mb-0 "
            >
              Daftar
            </NavLink>
          </button>
          <button className="p-1">
            <NavLink
              to="/login"
              className="rounded-xl bg-primary py-3 px-6 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
            >
              Masuk
            </NavLink>
          </button>
        </div>

        <button
          onClick={handleDropdown}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default Hamburger;
