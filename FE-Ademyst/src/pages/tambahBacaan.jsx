import React, { useContext } from "react";
import { AppContext } from "../context/app-provider";
import axios from "axios";

function TambahBacaan({ visible, onClose }) {
  const { bacaan, setBacaan } = useContext(AppContext);
  const { bacaanInput, setBacaanInput } = useContext(AppContext);
  const { showModal, setShowModal } = useContext(AppContext);
  
  const token = localStorage.getItem("token");

  if (!visible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBacaanInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

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

  const handleClick = async () => {
    // e.preventDefault();

    let newBacaan = {
      title: bacaanInput.title,
      description: bacaanInput.desc,
    };

    const { data } = await axios.post(
      "https://ademystapi.adaptable.app/courses",
      newBacaan,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data);
    console.log(newBacaan);
    setShowModal(false);
    getBacaan()
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center">
        <div className="bg-slate-100 flex flex-col pb-4 rounded-md w-80">
          <div className="bg-dark flex justify-between mb-4 p-2 rounded-t-md">
            <p className="font-bold text-primary">Tambah Bacaan</p>
            <button onClick={onClose} className="font-bold text-red-500">
              X
            </button>
          </div>
          <form className="container font-medium grid gap-1">
            <div className="">
              <label>Judul Bacaan:</label>
              <br />
              <input
                type="text"
                name="title"
                onChange={handleChange}
                className="border border-black rounded-md w-full font-normal"
              />
            </div>
            <div>
              <label>Deskripsi Bacaan:</label>
              <br />
              <textarea
                type="text"
                name="desc"
                onChange={handleChange}
                className="border border-black rounded-md w-full h-52 font-normal"
              />
            </div>
          </form>
          <button
            onClick={handleClick}
            className="bg-primary mx-4 mt-3 py-1 px-3 rounded-md border-2 border-secondary text-white font-bold"
          >
            Tambah
          </button>
        </div>
      </div>
    </>
  );
}

export default TambahBacaan;
