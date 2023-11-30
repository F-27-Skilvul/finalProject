import React, { useContext } from "react";
import { AppContext } from "../../context/app-provider";

function BtnTambahBacaan() {
  const { showModal, setShowModal } = useContext(AppContext);

  return (
    <div className="max-w-fit ml-4">
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className="bg-primary text-white font-semibold px-3 py-1 rounded-lg border-2 border-secondary flex items-center drop-shadow-md transition duration-500 hover:bg-opacity-60"
      >
        Bacaan Baru
        <span>
          <svg
            className="h-4 w-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path
              fillRule="evenodd"
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default BtnTambahBacaan;
