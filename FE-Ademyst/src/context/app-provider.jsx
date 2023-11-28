import React, { useState } from 'react'
import { createContext } from "react";

export const AppContext = createContext()


function AppProvider({ children }) {
    const [dropdownActive, setDropdownActive] = useState(true)
    const [isLogin, setIsLogin] = useState(false)
    const [bacaan, setBacaan] = useState([
      {
        id : 1,
        imgSrc : "https://iili.io/Jx3xfJj.png",
        title : "Data Analyst",
        desc : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        topic : 13,
        timeOfContent : 28,
        lesson : 131,
        monthToComplete : 4,
      },
      {
        id : 2,
        imgSrc : "https://iili.io/Jx3xBOQ.png",
        title : "Programmer Web Developer",
        desc : "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        topic : 13,
        timeOfContent : 28,
        lesson : 131,
        monthToComplete : 4,
      }
    ])

  return (
    <AppContext.Provider value={{ dropdownActive, setDropdownActive, isLogin, setIsLogin, bacaan, setBacaan }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider