import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imgSrc, title, subTitle, path }) => {
  return (
    <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10 outline outline-transparent outline-offset-2 hover:outline-primary">
        <img src={imgSrc} alt="learningtracks" className="w-full" />
        <div className="py-8 px-6">
          <h3>
            <NavLink
              to={path}
              className="block mb-3 font-semibold text-xl text-dark text-center hover:text-primary truncate"
            >
              {title}
            </NavLink>
          </h3>
          <p className="font-medium text-base text-secondary mb-6">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

const Fitur = () => {
  const cardItem = [
    {
      imgSrc:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg", // image sample
      title: "Learning Tracks",
      subTitle:
        "Belajar melalui serangkaian topik, pelajaran, dan proyek yangkomprehensif. Ini dirancang dengan baik bahkan untuk pendatang baru.",
      path: "/pelajari",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg", // image sample
      title: "Real Projects",
      subTitle:
        "Bangun dan pamerkan proyek untuk menampilkan keahlian andayang sebenarnya dengan memperhatikan kualitas.",
      path: "/pelajari",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg", // image sample
      title: "Live Mentorship",
      subTitle:
        "Dapatkan mentor privat yang berdedikasi dari para profesionalyang benar-benar berpengalaman.",
      path: "/pelajari",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg", // image sample
      title: "Community Forum",
      subTitle:
        "Diskusikan berbagai topik menarik. Ini adalah tempat yang amandan bersih bagi semua orang untuk bertanya dan menjawabnya.",
      path: "/pelajari",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg", // image sample
      title: "Team Collaboration",
      subTitle:
        "Berkolaborasi dengan anggota komunitas lainnya sebagai sebuah tim. Bangun dan tunjukkan proyek anda bersama-sama.",
      path: "/pelajari",
    },
    {
      imgSrc:
        "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg", // image sample
      title: "Job Oppurtunities",
      subTitle:
        "Temukan peluang pekerjaan penuh waktu atau pekerjaan lepas. Temukan pekerjaan bermakna yang Anda sukai.",
      path: "/pelajari",
    },
  ];

  return (
    <section id="fitur" className="pt-24 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Yang didapatkan
            </h2>
            <p className="font-medium text-base text-secondary md:text-lg">
              Ademyst menyediakan hal-hal untuk membantu persiapan perjalanan
              karier anda.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mx-auto">
          {cardItem.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
        <div className="flex justify-center items-center px-4">
          <button
            type="button"
            className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:opacity-80 hover:shadow-lg transition duration-500"
          >
            Keren, saya menginginkannya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Fitur;
