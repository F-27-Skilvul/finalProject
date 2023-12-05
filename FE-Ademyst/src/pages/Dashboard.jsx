import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import axios from "axios";

const Dashboard = () => {
  const [bacaanFav, setBacaanFav] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    getBacaanFav();
  }, []);

  const getBacaanFav = async () => {
    const { data } = await axios.get(
      "https://ademystapi.adaptable.app/followCourse",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setBacaanFav(data);
  };


  const handleClick = async (index) => {
    console.log(bacaanFav[index]);

    let id = bacaanFav[index].id;

    console.log(id);
    const { data } = await axios.delete(
      `https://ademystapi.adaptable.app/followCourse/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(data);
    getBacaanFav();
  };

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-auto shadow-md pb-24 bg-secondary">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Activity
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Topic
                  <a href="#">
                    <svg
                      className="w-3 h-3 ml-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {bacaanFav.map((bacaan, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {bacaan.title}
                </th>
                <td className="px-6 py-4 text-lg">{bacaan.totalTopics}</td>
                <td className="px-6 py-4 text-right">
                  <button
                    className="text-red-500"
                    onClick={() => handleClick(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-5"
                      fill="currentColor"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
