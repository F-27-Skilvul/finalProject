import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [dropdownActive, setDropdownActive] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [bacaan, setBacaan] = useState([
    {
      id: 1,
      imgSrc: "https://iili.io/Jx3xfJj.png",
      title: "Data Analyst",
      desc: "Temukan dasar-dasar analisis data dan menjadi seorang Data Analyst yang kompeten. Baca sumber daya ini untuk memahami alat, teknik, dan konsep dasar dalam analisis data.",
      topic: 13,
      timeOfContent: 28,
      lesson: 131,
      monthToComplete: 4,
    },
    {
      id: 2,
      imgSrc: "https://iili.io/Jx3xBOQ.png",
      title: "Web Developer",
      desc: "Pelajari langkah-langkah menuju menjadi seorang Web Developer yang kompeten. Temukan alat, teknik, dan praktik terbaik untuk merancang dan mengembangkan situs web yang menarik.",
      topic: 17,
      timeOfContent: 18,
      lesson: 140,
      monthToComplete: 4,
    },
  ]);
  const [roleLogin, setRoleLogin] = useState("admin");
  const [showModal, setShowModal] = useState(false);
  const [bacaanInput, setBacaanInput] = useState({
    title: "",
    desc: "",
    imgSrc: "",
  });
  const [users, setUsers] = useState([
    {
      email: "a@gmail.com",
      password: "password",
      name: "a",
    },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <AppContext.Provider
      value={{
        dropdownActive,
        setDropdownActive,
        isLogin,
        setIsLogin,
        bacaan,
        setBacaan,
        roleLogin,
        setRoleLogin,
        showModal,
        setShowModal,
        bacaanInput,
        setBacaanInput,
        users,
        addUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
