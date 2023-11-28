import React, { useContext } from "react";
import { AppContext } from "../../context/app-provider";
import { NavLink } from "react-router-dom";

function DropdownMenu() {
  const { dropdownActive, setDropdownActive } = useContext(AppContext);

  return (
    <div
      id="dropdown-menu"
      className={`px-4 pb-4 ${dropdownActive ? "hidden" : ""}`}
    >
      <ul className="bg-gray-700 bg-opacity-50 border border-gray-400 rounded-xl px-3 py-2 flex flex-col gap-1">
        <li>
          <NavLink
            to="/pelajari"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Pelajari
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/temukan"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Temukan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/forum"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Forum
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/langganan"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Berlangganan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/bantuan"
            className="text-white  flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Bantuan
          </NavLink>
        </li>

        <div className="flex flex-col sm:flex-row justify-between mt-2">
          <NavLink
            to="/daftar"
            className="sm:w-[49%] p-1 mt-3 bg-white rounded-lg text-center font-semibold hover:opacity-80 hover:shadow-lg"
          >
            Daftar
          </NavLink>

          <NavLink
            to="/login"
            className="sm:w-[49%] p-1 mt-3 bg-primary text-white rounded-lg text-center font-semibold hover:opacity-80 hover:shadow-lg"
          >
            Masuk
          </NavLink>
        </div>
      </ul>
    </div>
  );
}

export default DropdownMenu;
