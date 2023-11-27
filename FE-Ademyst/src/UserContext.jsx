import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

    return <UserContext.Provider value={{ users, addUser }}>{children}</UserContext.Provider>;
};
