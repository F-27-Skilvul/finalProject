import React, { useContext } from "react";
import { AppContext } from "../../context/app-provider";

function DropdownMenu() {
  const { dropdownActive, setDropdownActive } = useContext(AppContext);
  
  return (
    <div id="dropdown-menu" className={`px-4 mb-4 ${dropdownActive? "hidden" : ""}`}>
      <ul className="bg-gray-700 bg-opacity-50 border border-gray-400 rounded-xl px-3 py-2 flex flex-col gap-1">
        <li>
          <a
            href="pelajari.html"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Pelajari
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Temukan
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Forum
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Berlangganan
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-white  flex px-3 font-semibold border-b border-gray-400 pb-1"
          >
            Bantuan
          </a>
        </li>

        <div className="flex flex-col sm:flex-row justify-between mt-2">
          <button className="sm:w-[49%] p-1 mt-3 bg-white rounded-lg text-center font-semibold hover:opacity-80 hover:shadow-lg">
            <a
              href="#" //link ke /register
            >
              Daftar
            </a>
          </button>

          <button className="sm:w-[49%] p-1 mt-3 bg-primary rounded-lg text-center font-semibold hover:opacity-80 hover:shadow-lg">
            <a
              href="#" //link ke /login
            >
              Masuk
            </a>
          </button>
        </div>
      </ul>
    </div>
  );
}

export default DropdownMenu;
