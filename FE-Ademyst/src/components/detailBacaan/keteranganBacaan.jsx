import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import IsiListComponent from "./listBacaan";
import { AppContext } from "../../context/app-provider";
import axios from "axios";

const KeteranganPreviewComponent = () => {
  const {
    bacaan,
    roleLogin,
    setShowModal,
    setFormData,
    idBacaan,
    setIdBacaan,
    showMessage,
    setShowMessage,
  } = useContext(AppContext);
  const { title } = useParams();
  const token = localStorage.getItem("token");

  const pilihBacaan = bacaan.find(
    (bacaan) => decodeURIComponent(bacaan.title).replace(/ /g, "_") === title
  );

  const handleClick = async (e) => {
    e.preventDefault();

    if (roleLogin == "admin") {
      setFormData(pilihBacaan);
      setShowModal(true);
    } else {
      setIdBacaan(pilihBacaan.id);
      console.log(pilihBacaan.id)
      try {
        const { data } = await axios.post(
          "https://ademystapi.adaptable.app/followCourse",
          {
            courseId: pilihBacaan.id,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data);
        // if(data.message)
      } catch (err) {
        console.log(err.message);
      } finally {
        setShowMessage(true);
      }
    }
  };

  return (
    <div className="container max-w-screen-xl md:flex md:flex-row justify-start">
      <div id="left" className="flex flex-col md:w-1/3">
        <button
          onClick={handleClick}
          className="px-8 py-2 bg-primary text-white rounded-xl text-lg font-medium mb-4"
        >
          {roleLogin === "admin" ? "Perbarui Bacaan" : "Track Favorit"}
          {/* <i className="fa-regular fa-heart fa-xl mr-4"></i>Track Favorit */}
        </button>

        <h1 className="font-semibold text-2xl text-gray-700 pb-4">
          Tentang Track Ini
        </h1>

        <div className="relative overflow-x-auto">
          <table className="text-md text-left text-gray-500 w-full">
            <tbody>
              <tr>
                <th
                  scope="row"
                  className="font-medium text-gray-700 whitespace-nowrap"
                >
                  <i className="fa-solid fa-signal"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">Pemula</p>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="font-medium text-gray-700 whitespace-nowrap"
                >
                  <i className="fa-solid fa-book"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">{pilihBacaan.totalTopics} Topik</p>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="font-medium text-gray-700 whitespace-nowrap"
                >
                  <i className="fa-solid fa-clock"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">
                    Konten {pilihBacaan.totalTime} Jam{" "}
                  </p>
                </td>
              </tr>
              {/* <tr>
                <th
                  scope="row"
                  className="font-medium text-gray-700 whitespace-nowrap"
                >
                  <i className="fa-solid fa-box-open"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">131 Pelajaran</p>
                </td>
              </tr>
              <tr>
                <th
                  scope="row"
                  className="font-medium text-gray-700 whitespace-nowrap"
                >
                  <i className="fa-solid fa-calendar-check"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">4 bulan</p>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
      <IsiListComponent />
    </div>
  );
};

export default KeteranganPreviewComponent;
