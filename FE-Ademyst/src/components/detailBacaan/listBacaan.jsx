import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app-provider";

const IsiListComponent = () => {
  const { bacaan } = useContext(AppContext);
  const { title } = useParams();

  const { topics } = bacaan.find(
    (bacaan) => decodeURIComponent(bacaan.title).replace(/ /g, "_") === title
  );

  return (
    <div id="right" className="flex flex-col md:w-2/3 md:ml-4 md:mt-0 xs:mt-4">
      {topics
        .map((topics, index) => (
          <a
            key={index}
            className="flex justify-between bg-white px-4 py-6 rounded-2xl mb-2 border border-gray-200 outline outline-transparent outline-offset-2 hover:outline-primary"
            href="#"
          >
            <div className="flex">
              <img
                className="h-7 w-7"
                src={
                  "https://ik.imagekit.io/catamyst/icons/flag_mzRaOyXEPU.png"
                }
                alt=""
              />
              <h1 className="ml-4 text-lg font-semibold">{topics.title}</h1>
            </div>
            <h1 className="text-lg font-semibold">{topics.tag}</h1>
          </a>
        ))
        .reverse()}
    </div>
  );
};

export default IsiListComponent;
