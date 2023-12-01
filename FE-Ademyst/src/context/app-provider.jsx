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
  const [email, setEmail] = useState(""); // Assuming you have email state
  const [password, setPassword] = useState(""); // Assuming you have password state
  const [errorNotification, setErrorNotification] = useState(false); // Define errorNotification state

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const handleLogin = async (e) => {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await fetch('https://ademystapi.adaptable.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Periksa apakah login berhasil berdasarkan respons dari API
        if (data.success) {
          // Set state atau konteks yang menandakan pengguna telah login
          setIsLogin(true);
          // Simpan informasi pengguna di konteks
          setLoggedInUser(data.user); // Sesuaikan ini dengan struktur data yang diberikan oleh API
          navigate("/dashboard");
        } else {
          // Tampilkan pesan kesalahan jika login gagal
          setErrorNotification(true);
        }
      } else {
        // Tangani kesalahan server
        setErrorNotification(true);
      }
    } catch (error) {
      console.error("Kesalahan selama login:", error);
      setErrorNotification(true);
    }
  };

  useEffect(() => {
    handleLogin();
  }, [email, password]);

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
        errorNotification, // Include errorNotification in the context
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
