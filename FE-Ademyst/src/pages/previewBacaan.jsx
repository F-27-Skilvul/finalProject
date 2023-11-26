import React from "react";
import KeteranganPreviewComponent from "../components/detailBacaan/keteranganBacaan";
import HeaderPreviewComponent from "../components/detailBacaan/headerBacaan";

const PreviewBacaan = () => {
  return (
    <section id="preview-bacaan" className="bg-slate-100">
      <HeaderPreviewComponent />
      <KeteranganPreviewComponent />
    </section>
  );
};

export default PreviewBacaan;
