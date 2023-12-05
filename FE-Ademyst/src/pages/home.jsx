import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HeroPage from "../components/landingPage/heroPage";
import Fitur from "../components/landingPage/fitur";
import Testimoni from "../components/landingPage/testimoni";


function Home() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Fitur />
      <Testimoni />
      <Footer />
    </>
  );
}

export default Home;
