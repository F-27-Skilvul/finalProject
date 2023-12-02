import React, { useState, useEffect } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppProvider({ children }) {
  const [dropdownActive, setDropdownActive] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [bacaan, setBacaan] = useState([
    // ... your existing state initialization
  ]);
  const [roleLogin, setRoleLogin] = useState("user");
  const [showModal, setShowModal] = useState(false);
  const [bacaanInput, setBacaanInput] = useState({
    title: "",
    desc: "",
    imgSrc: "",
  });
  const [users, setUsers] = useState([]);

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
        setUsers
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
