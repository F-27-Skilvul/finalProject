import React, { useState } from 'react'
import { createContext } from "react";

export const AppContext = createContext()


function AppProvider({ children }) {
    const [dropdownActive, setDropdownActive] = useState(true)

  return (
    <AppContext.Provider value={{ dropdownActive, setDropdownActive }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider