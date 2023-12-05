import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/app-provider";
import Message from "./message";

function HeaderPreviewComponent() {
  const { bacaan, setBacaan } = useContext(AppContext);
  const { title } = useParams();

  const pilihBacaan = bacaan.find(
    (bacaan) => decodeURIComponent(bacaan.title).replace(/ /g, "_") === title
  );

  return (
    <>
      
      <div className="container max-w-screen-xl pt-4 text-center items-center pb-4 flex flex-col md:flex-row md:text-start">
        <Message />
        <img
          src={`https://ademystapi.adaptable.app/images/${pilihBacaan.image}`}
          className="max-w-xs justify-center"
        />
        <div className="ml-4">
          <h2 className="text-4xl font-extrabold text-primary">
            {pilihBacaan.title}
          </h2>
          <p className="my-4 text-lg text-gray-500 ">
            {pilihBacaan.description}
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderPreviewComponent;
