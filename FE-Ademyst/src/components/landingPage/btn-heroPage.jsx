import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/app-provider";

function BtnHeroPage() {
    const { isLogin, setIsLogin } = useContext(AppContext);


  return (
    <NavLink
      to={isLogin ? "/pelajari" : "/daftar"}
      className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:opacity-80 hover:shadow-lg transition duration-500"
    >
      Dapatkan sekarang
      <svg
        className="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </NavLink>
  );
}

export default BtnHeroPage;
