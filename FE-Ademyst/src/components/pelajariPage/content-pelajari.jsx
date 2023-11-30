import React, { useContext } from "react";
import HeaderPelajari from "./header-pelajari";
import CardPelajari from "./card-pelajari";
import BtnTambahBacaan from "./btn-tambahBacaan";
import { AppContext } from "../../context/app-provider";
import TambahBacaan from "../../pages/tambahBacaan";

function ContentPelajari() {
  const { showModal, setShowModal } = useContext(AppContext);
  const { roleLogin, setRoleLogin } = useContext(AppContext);

  const handleOnClose = () => setShowModal(false);

  return (
    <section id="rekomendasi" className="bg-slate-100">
      <div className="container">
        <HeaderPelajari />
        {roleLogin === "admin" ? <BtnTambahBacaan /> : ""}
        <CardPelajari />
      </div>
      <TambahBacaan onClose={handleOnClose} visible={showModal} />
    </section>
  );
}

export default ContentPelajari;
