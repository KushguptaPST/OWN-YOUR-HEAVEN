// src/AuthProvider.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Create context
export const AuthContext = createContext();

// 🔥 Export a custom hook for easier usage
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedUsername = localStorage.getItem("username");
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUser({ username: storedUsername });
    }
  }, []);

  const login = (userData, accessToken) => {
    setIsLoggedIn(true);
    setUser(userData);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("username", userData.username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("username");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;





