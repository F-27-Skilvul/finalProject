import React, { useContext } from "react";
import { AppContext } from "../context/app-provider";

function TambahBacaan({ visible, onClose }) {
  const { bacaan, setBacaan } = useContext(AppContext);
  const { bacaanInput, setBacaanInput } = useContext(AppContext);
  const { showModal, setShowModal } = useContext(AppContext);

  if (!visible) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBacaanInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();

    let newBacaan = {
      id: new Date(),
      title: bacaanInput.title,
      desc: bacaanInput.desc,
      imgSrc: bacaanInput.imgSrc,
    };

    setBacaan([...bacaan, newBacaan]);

    console.log(newBacaan);
    setShowModal(false);
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
            <div className="">
              <label>Gambar Bacaan:</label>
              <br />
              <input
                type="text"
                name="imgSrc"
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
