import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    //앱이 로드될 때 저장된 토큰을 불러옴
    const storedAccessToken = localStorage.getItem("accessToken");
    const storedRefreshToken = localStorage.getItem("refreshToken");
   

    if (storedAccessToken && storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
      
      setIsAuthenticated(true);
    }
  }, []);

  //로그인 함수
  const login = (newAccessToken, newRefreshToken) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);

    setIsAuthenticated(true);

    localStorage.setItem("accessToken", newAccessToken);
    localStorage.setItem("refreshToken", newRefreshToken);
   
  };

  //로그아웃 함수
  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    
    setIsAuthenticated(false);

    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    
    window.location.href = "/login"; // 로그인 페이지로 이동
  };

  return (
    <AuthContext.Provider value={{  accessToken, refreshToken, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
