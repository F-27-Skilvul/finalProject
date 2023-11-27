import React, { useState } from 'react'
import { createContext } from "react";

export const AppContext = createContext()


function AppProvider({ children }) {
    const [dropdownActive, setDropdownActive] = useState(true)
    const [isLogin, setIsLogin] = useState(false)

  return (
    <AppContext.Provider value={{ dropdownActive, setDropdownActive, isLogin, setIsLogin }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider