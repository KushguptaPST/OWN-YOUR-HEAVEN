import React, { useState, createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // 🔥 Fix: export custom hook

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  const login = (userData, accessToken) => {
    setIsLoggedIn(true);
    localStorage.setItem("accessToken", accessToken);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;



