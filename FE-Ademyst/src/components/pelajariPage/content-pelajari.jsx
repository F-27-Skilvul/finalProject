import React from "react";
import HeaderPelajari from "./header-pelajari";
import CardPelajari from "./card-pelajari";

function ContentPelajari() {
  return (
    <section id="rekomendasi" className="bg-slate-100">
      <div className="container">
        <HeaderPelajari />
        <CardPelajari />
      </div>
    </section>
  );
}

export default ContentPelajari;
