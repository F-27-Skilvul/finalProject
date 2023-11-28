import React, { useContext } from "react";
import { AppContext } from "../../context/app-provider";
import { NavLink } from "react-router-dom";

function CardPelajari() {
  const { bacaan, setBacaan } = useContext(AppContext);

  return (
    <div className="flex flex-wrap">
      {bacaan.map((bacaan) => (
        <div key={bacaan.id} className="lg:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow outline outline-transparent outline-offset-2 hover:outline-primary">
            <div className="rounded-t-lg mx-auto max-w-xs p-2">
              <NavLink to={decodeURIComponent(bacaan.title).replace(/ /g, "_")}>
                {/* untuk menghasilkan url tanpa spasi dari tittle bacaan */}
                <img className="w-full" src={bacaan.imgSrc} alt="" />
              </NavLink>
            </div>
            <div className="p-5">
              <NavLink to={decodeURIComponent(bacaan.title).replace(/ /g, "_")}>
                {/* untuk menghasilkan url tanpa spasi dari tittle bacaan */}
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
                  {bacaan.title}
                </h5>
              </NavLink>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {bacaan.desc}
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <i className="fa-solid fa-book"></i>
                  <p className="text-xs"> {bacaan.topic} Topics</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <i className="fa-solid fa-clock"></i>
                  <p className="text-xs">
                    {bacaan.timeOfContent} hours of content
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <i className="fa-solid fa-box-open"></i>
                  <p className="text-xs"> {bacaan.lesson} Lessons</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <i className="fa-solid fa-calendar-check"></i>
                  <p className="text-xs">
                    {bacaan.monthToComplete} months to complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardPelajari;
