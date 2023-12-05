import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/app-provider";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import axios from "axios";

const Login = () => {
  const { setIsLogin, roleLogin, setRoleLogin } = useContext(AppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://ademystapi.adaptable.app/auth/login",
        userLogin
      );
      console.log(data.user);

      if (userLogin.email != "admin@gmail.com") {
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("username", data.user.name);
      } else {
        localStorage.setItem("email", "admin@gmail.com");
        localStorage.setItem("username", "admin");
      }

      if (!data.token) throw new Error("Cek kembali Email atau Password anda");

      localStorage.setItem("token", data.token);
      setIsLogin(true);
      setIsError(false);
      navigate("/");

      if (data.admin ? setRoleLogin("admin") : setRoleLogin("user"))
        return console.log(roleLogin);
    } catch (err) {
      setErrorMessage(err);
      setIsError(true);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <form action="" className="w-full">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-xl text-center">
              <h2 className="mb-3 text-3xl font-bold text-[#0cb5ca] lg:text-4xl">
                Masuk
              </h2>
              <p className="leading-relaxed">Gunakan akun Ademyst mu</p>
            </div>
          </div>
          <div className="w-full lg:mx-auto lg:w-1/2">
            <div className="mb-6 w-full px-4">
              <label htmlFor="email" className="mb-2 block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ademyst@example.com"
                value={userLogin.email}
                onChange={onChange}
                // onChange={(e) => setEmail(e.target.value)}
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
                    id="toggle"
                    className="js-password-label mx-auto cursor-pointer rounded-lg bg-white px-5 py-1 hover:bg-slate-50"
                    htmlFor="toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Sembunyikan" : "Lihat"}
                  </label>
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="********"
                  value={userLogin.password}
                  onChange={onChange}
                  // onChange={(e) => setPassword(e.target.value)}
                  className="text-dark mb-3 w-full rounded-xl bg-slate-200 p-3 focus:border-[#0cb5ca] focus:outline-none focus:ring-1 focus:ring-[#0cb5ca]"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <button
                id="login-btn"
                onClick={handleLogin}
                className="w-full rounded-xl bg-[#0cb5ca] py-3 px-8 text-base font-semibold text-white transition duration-500 hover:opacity-80 hover:shadow-lg"
              >
                Masuk
              </button>
              <div className="my-4 text-center">
                Tidak punya akun ?{" "}
                <a className="text-third hover:text-[#0cb5ca]" href="/daftar">
                  Daftar sekarang
                </a>
              </div>
              <div className="my-4 text-center">
                Lupa password ?{" "}
                <a href="#" className="text-third hover:text-[#0cb5ca]">
                  Pulihkan disini
                </a>
              </div>
              <div
                id="error-notification"
                className={`${
                  isError
                    ? "w-full p-4 text-white bg-red-500 rounded-md mt-4"
                    : "hidden"
                }`}
              >
                {errorMessage.message}
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
