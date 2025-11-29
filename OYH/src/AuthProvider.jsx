import React, { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // Initialize state from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("accessToken")
  );

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

