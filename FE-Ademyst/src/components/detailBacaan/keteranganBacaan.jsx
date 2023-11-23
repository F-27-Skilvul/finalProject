import React from 'react';

const KeteranganPreviewComponent = () => {
  return (
    <div className="container max-w-screen-xl md:flex md:flex-row justify-start">
      <div id="left" className="flex flex-col md:w-1/3">

        <button className="px-8 py-2 bg-primary text-white rounded-xl text-lg font-medium mb-4">
          <i className="fa-regular fa-heart fa-xl mr-4"></i>Track Favorit
        </button>

        <h1 className="font-semibold text-2xl text-gray-700 pb-4">Tentang Track Ini</h1>

        <div className="relative overflow-x-auto">
          <table className="text-md text-left text-gray-500 w-full">
            <tbody>
              <tr>
                <th scope="row" className="font-medium text-gray-700 whitespace-nowrap">
                  <i className="fa-solid fa-signal"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">Pemula</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="font-medium text-gray-700 whitespace-nowrap">
                  <i className="fa-solid fa-book"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">13 Topik</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="font-medium text-gray-700 whitespace-nowrap">
                  <i className="fa-solid fa-clock"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">Konten 28 Jam </p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="font-medium text-gray-700 whitespace-nowrap">
                  <i className="fa-solid fa-box-open"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">131 Pelajaran</p>
                </td>
              </tr>
              <tr>
                <th scope="row" className="font-medium text-gray-700 whitespace-nowrap">
                  <i className="fa-solid fa-calendar-check"></i>
                </th>
                <td className="px-6">
                  <p className="font-medium">4 bulan</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default KeteranganPreviewComponent;
