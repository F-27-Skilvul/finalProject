import React, { useContext, useEffect } from "react";
// import Profile from "../../assets/surya.jpg";
import { AppContext } from "../../context/app-provider";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function UserMenu() {
  const {
    isLogin,
    setIsLogin,
    dropdownUser,
    setDropdownUser,
    setBacaan,
    setRoleLogin,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const profilUrl = `https://ui-avatars.com/api/?name=${username}&background=random `;

  const handleDropdown = (e) => {
    e.preventDefault();

    setDropdownUser(!dropdownUser);

    console.log(dropdownUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setIsLogin(false);
    setDropdownUser(!dropdownUser);
    setBacaan([]);
    setRoleLogin("");
    navigate("/");
  };

  return (
    <>
      <div className="relative">
        <button
          id="member-login"
          type="button"
          className={`${
            isLogin
              ? "flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              : "hidden"
          }`}
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
          onClick={handleDropdown}
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-10 h-10 rounded-full"
            src={profilUrl}
            id="user-photo"
            alt="user photo"
          />
        </button>

        <div
          id="dropdownAvatar"
          className={`${
            dropdownUser
              ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute -translate-x-32 translate-y-4"
              : "hidden"
          }`}
        >
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="font-medium">{username}</div>
            <div className="truncate text-gray-200">{email}</div>
          </div>
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownUserAvatarButton"
          >
            <li>
              <NavLink
                to="/dashboard"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pengaturan"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Pengaturan
              </NavLink>
            </li>
          </ul>
          <div className="py-2">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserMenu;
