import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import axios from "axios";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    name: "",
    alamat: "",
  });
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsError(false)
    setIsSuccess(false)

    try {
      const { data } = await axios.post(
        "https://ademystapi.adaptable.app/auth/regis",
        userData
      );

      console.log(data.message);

      if (data.message == "Email already registered") {
        setIsError(true);
        throw new Error("Akun anda sudah terdaftar")
      } if (data.message == "berhasil regis") {
        setIsSuccess(true);
        throw new Error("Akun anda berhasil dibuat")
      }
    } catch (err) {
      setErrorMessage(err);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-7">
        <div className="">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <h2 className="mb-3 text-3xl font-bold text-[#0cb5ca] lg:text-4xl">
                Mulai Sekarang
              </h2>
              <p className="leading-relaxed">Ayo buat akun Ademyst mu</p>
            </div>
          </div>
          <form className="mx-auto" onSubmit={handleRegister}>
            <div className="w-full lg:mx-auto lg:w-1/2">
              <div className="mb-6 w-full px-4">
                <label htmlFor="nama" className="mb-2 block font-semibold">
                  Nama
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                  type="text"
                  id="nama"
                  placeholder="Nama lengkap anda"
                  className="text-dark w-full rounded-xl bg-slate-200 p-3 focus:border-[#0cb5ca] focus:outline-none focus:ring-1 focus:ring-[#0cb5ca]"
                />
              </div>
              <div className="mb-6 w-full px-4">
                <label htmlFor="email" className="mb-2 block font-semibold">
                  Email
                </label>
                <input
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                  type="email"
                  id="email"
                  placeholder="ademyst@example.com"
                  className="text-dark w-full rounded-xl bg-slate-200 p-3 focus:border-[#0cb5ca] focus:outline-none focus:ring-1 focus:ring-[#0cb5ca]"
                />
              </div>
              <div className="mb-6 w-full px-4">
                <label htmlFor="password" className="mb-2 block font-semibold">
                  Password
                </label>
                <div className="relative w-full">
                  <div className="inset-y-50 absolute right-0 mt-2 flex items-center px-3">
                    <input
                      className="js-password-toggle hidden"
                      id="toggle"
                      type="checkbox"
                    />
                    <label
                      className="js-password-label mx-auto cursor-pointer rounded-lg bg-white px-5 py-1 hover:bg-slate-50"
                      htmlFor="toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Sembunyikan" : "Lihat"}
                    </label>
                  </div>
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="********"
                    className="text-dark mb-3 w-full rounded-xl bg-slate-200 p-3 focus:border-[#0cb5ca] focus:outline-none focus:ring-1 focus:ring-[#0cb5ca]"
                  />
                </div>

                <small className="block">
                  Gunakan dengan minimal 8 karakter
                </small>
              </div>
              <div className="w-full px-4">
                <button
                  id="register-btn"
                  className="w-full rounded-xl bg-[#0cb5ca] py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
                >
                  Buat akun saya
                </button>
              </div>
            </div>
          </form>
          <div className="my-4 text-center">
            Sudah memiliki akun!{" "}
            <a className="text-third hover:text-[#0cb5ca]" href="/">
              Masuk
            </a>
          </div>
          <div
            id="error-notification"
            className={`${
              isError
                ? "w-full p-4 text-white bg-red-500 rounded-md mt-4"
                : "hidden"
            } `}
          >
            {errorMessage.message}
            {/* Ada kesalahan dalam formulir. Silakan periksa lagi. */}
          </div>
          <div
            id="success-notification"
            className={`${
              isSuccess
                ? "w-full p-4 text-white opacity-70 bg-green-500 rounded-md mt-4"
                : "hidden"
            } `}
          >
            {errorMessage.message}
            {/* Akun Anda berhasil dibuat! */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
