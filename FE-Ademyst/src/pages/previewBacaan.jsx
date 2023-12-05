import React, { useContext } from "react";
import KeteranganPreviewComponent from "../components/detailBacaan/keteranganBacaan";
import HeaderPreviewComponent from "../components/detailBacaan/headerBacaan";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import UpdateBacaan from "./updateBacaan";
import { AppContext } from "../context/app-provider";

const PreviewBacaan = () => {
  const { showModal, setShowModal } = useContext(AppContext);

  const handleOnClose = () => setShowModal(false);
  return (
    <>
      <Navbar />
      <section id="preview-bacaan" className="bg-slate-100">
        <HeaderPreviewComponent />
        <KeteranganPreviewComponent />
        <UpdateBacaan onClose={handleOnClose} visible={showModal} />
      </section>
      <Footer />
    </>
  );
};

export default PreviewBacaan;
