import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app-provider";

function HeaderPreviewComponent() {
  const { bacaan, setBacaan } = useContext(AppContext);
  const { title } = useParams();

  const pilihBacaan = bacaan.find(
    (bacaan) => decodeURIComponent(bacaan.title).replace(/ /g, "_") === title
  );

  return (
    <div className="container max-w-screen-xl pt-4 text-center items-center pb-4 flex flex-col md:flex-row md:text-start">
      <img src={pilihBacaan.imgSrc} className="max-w-xs justify-center" />
      <div>
        <h2 className="text-4xl font-extrabold text-primary">
          {pilihBacaan.title}
        </h2>
        <p className="my-4 text-lg text-gray-500 ">{pilihBacaan.description}</p>
      </div>
    </div>
  );
}

export default HeaderPreviewComponent;
