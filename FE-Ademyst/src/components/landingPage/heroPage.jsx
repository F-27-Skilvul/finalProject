import React from "react";
import BtnHeroPage from "./btn-heroPage";
import { NavLink } from "react-router-dom";

function HeroPage() {
  return (
    <section className="bg-center bg-no-repeat bg-[url('assets/heropage.jpg')] bg-gray-700 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Ayo kembangkan potensi kamu sekarang
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Di Ademyst, kamu akan bisa mengetahui apa saja hal yang akan kamu
          lakukan untuk membantu proses pembelajaranmu.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <BtnHeroPage />
          <NavLink
            to="/"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Lebih lanjut
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
