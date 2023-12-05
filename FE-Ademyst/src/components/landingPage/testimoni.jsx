import React from "react";

const Card = ({ name, job, testi }) => {
  return (
    <div className="w-full px-4">
      <div className="flex p-5 bg-white rounded-xl shadow-lg overflow-hidden mb-10">
        <div className="grid grid-cols-1 w-full">
          <div className="flex items-center">
            <div className="relative w-20 h-20 mr-4 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              {/* Profile Picture */}
              <svg
                className="absolute w-22 h-22 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div>
              <h5 className="text-2xl font-semibold">{name}</h5>
              <h1 className="font-normal pt-1 ">{job}</h1>
            </div>
          </div>
          <p className="mt-4 text-medium text-gray-600">{testi}</p>
        </div>
      </div>
    </div>
  );
};

function Testimoni() {
  const testimoniList = [
    {
      name: "Fahri Dwi Hariyadi",
      job: "Game Developer",
      testi:
        "Materi yang berkualitas dan metode pembelajaran yang interaktif telah membantu saya mengembangkan keterampilan yang diperlukan dalam industri saya. Saya sangat merekomendasikan ini kepada siapa saja yang ingin mewujudkan karier cemerlang. Disini telah memberi saya akses ke kursus-kursus terbaik, dan interaksi dengan instruktur dan sesama peserta didik sangat mendukung perkembangan saya.",
    },
    {
      name: "Ariq Huwaidi",
      job: "Front-End Website Developer",
      testi:
        "Saat mencari platform pembelajaran yang tepat, saya menemukan Ademyst dan tidak pernah menyesal. Saya telah mengikuti berbagai kursus dan pelatihan yang membantu saya mencapai tujuan karier saya. Terima kasih atas kesempatan ini. Platform ini bukan hanya tempat saya memperoleh pengetahuan, tetapi juga tempat saya membangun jaringan yang berharga dan menjalin hubungan yang bermanfaat untuk masa depan.",
    },
    {
      name: "Archie Dylan Ramadhan",
      job: "Back-End Mobile Developer",
      testi:
        "Saya belajar banyak hal baru dan meningkatkan kepercayaan diri dalam karier saya. Saya merasa lebih siap dan yakin menghadapi tantangan dalam dunia kerja. Materi yang disediakan sangat relevan, dan saya mendapatkan dukungan penuh dari tim pendukung. Ini adalah alat yang sempurna untuk siapa pun yang ingin mencapai kesuksesan profesional. Bagi kalian jangan ragu untuk mencoba mengambil langkah sekecil apapun.",
    },
    {
      name: "Richard Owen",
      job: "Front-End Developer",
      testi:
        "Saya ingin mengucapkan terima kasih yang sebesar-besarnya kepada tim di Ademyst. Mereka telah menciptakan lingkungan pembelajaran yang memotivasi dan memberikan sumber daya berharga bagi para profesional seperti saya. Mereka membantu saya membangun fondasi yang kokoh untuk kesuksesan karier saya. Saya merasa diberdayakan dan siap menghadapi perubahan dan peluang yang datang.",
    },
  ];
  return (
    <section id="fitur" className="pt-36 pb-32 bg-secondary">
      <div className="container">
        <div className="w-full">
          <div className="max-w-full mx-auto text-center mb-16">
            <h2 className="font-bold text-primary text-3xl mb-4 sm:text-4xl lg:text-5xl">
              Apa kata mereka?
            </h2>
            <p className="font-medium text-base text-white md:text-lg">
              Mereka yang telah bergabung bersama Ademyst.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          {testimoniList.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
