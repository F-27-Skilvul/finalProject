import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/app-provider";
import { NavLink } from "react-router-dom";
import axios from "axios";

function CardPelajari() {
    const { bacaan, setBacaan } = useContext(AppContext);
  const token = localStorage.getItem("token");
  
  useEffect(() => {
    getBacaan();
  }, []);

  const getBacaan = async (e) => {
     const { data } = await axios.get(
       "https://ademystapi.adaptable.app/courses",
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     setBacaan(data);
   };

  return (
    <div className="flex flex-wrap">
      {bacaan.map((bacaan) => (
        <div key={bacaan.id} className="lg:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white border border-gray-200 rounded-lg shadow outline outline-transparent outline-offset-2 hover:outline-primary">
            <div className="rounded-t-lg mx-auto max-w-xs p-2">
              <NavLink to={decodeURIComponent(bacaan.title).replace(/ /g, "_")}>
                {/* untuk menghasilkan url tanpa spasi dari tittle bacaan */}
                <img className="max-h-48 mx-auto" src={`https://ademystapi.adaptable.app/images/${bacaan.image}`} alt="" />
              </NavLink>
            </div>
            <div className="p-5">
              <NavLink to={decodeURIComponent(bacaan.title).replace(/ /g, "_")}>
                {/* untuk menghasilkan url tanpa spasi dari tittle bacaan */}
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900">
                  {bacaan.title}
                </h5>
              </NavLink>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-4">
                {bacaan.description}
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
                    />
                  </svg>
                  <p className="text-xs"> {bacaan.totalTopics} Topics</p>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-400">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                    />
                  </svg>
                  <p className="text-xs">{bacaan.totalTime} hours of content</p>
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
