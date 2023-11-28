import React from "react";
import KeteranganPreviewComponent from "../components/detailBacaan/keteranganBacaan";
import HeaderPreviewComponent from "../components/detailBacaan/headerBacaan";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const PreviewBacaan = () => {
  return (
    <>
      <Navbar />
      <section id="preview-bacaan" className="bg-slate-100">
        <HeaderPreviewComponent />
        <KeteranganPreviewComponent />
      </section>
      <Footer />
    </>
  );
};

export default PreviewBacaan;
