import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { UserProvider } from "./UserContext"; // Impor ini

function App() {
    return (
        <div className="dark">
            <UserProvider>
                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Router>
            </UserProvider>
        </div>
    );
}

export default App