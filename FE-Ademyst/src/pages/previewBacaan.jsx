import React from "react";
import IsiListComponent from "../components/detailBacaan/listBacaan";
import KeteranganPreviewComponent from "../components/detailBacaan/keteranganBacaan";
import HeaderPreviewComponent from "../components/detailBacaan/headerBacaan";

const PreviewBacaan = () => {
  const listItems = [
    // ... your list items data
  ];

  return (
    <section id="preview-bacaan" className="bg-slate-100">
      <HeaderPreviewComponent />
      <KeteranganPreviewComponent />
      <IsiListComponent listItems={listItems} />
    </section>
  );
};

export default PreviewBacaan;