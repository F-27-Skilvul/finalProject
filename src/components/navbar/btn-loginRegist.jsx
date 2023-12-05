import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../context/app-provider";

function BtnLoginRegist() {
    const {isLogin} = useContext(AppContext)

  return (
    <div className={`${isLogin ? "hidden" : "flex flex-row"}`}>
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
  );
}

export default BtnLoginRegist;
