import { NavLink } from "react-router-dom";
import Hamburger from "./hamburger";
import DropdownMenu from "./dropdownMenu";

function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 transition-all ease-in-out duration-300 z-10 sticky top-0 bg-opacity-80 backdrop-blur-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <div className="px-4">
          <NavLink to="/" className="font-bold text-lg text-primary block py-6">
            Ademyst
          </NavLink>
        </div>

        {/* menubar */}
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto"
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/pelajari"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-rimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pelajari
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/temukan"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-rimary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Temukan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/forum"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Forum
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/langganan"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Berlangganan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bantuan"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 dark:text-white md:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Bantuan
              </NavLink>
            </li>
          </ul>
        </div>

        <Hamburger />
      </div>

      <DropdownMenu />
    </nav>
  );
}

export default Navbar;
