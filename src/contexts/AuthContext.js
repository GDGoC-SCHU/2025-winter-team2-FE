import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    try {
      const storedAccessToken = localStorage.getItem("accessToken");
      const storedRefreshToken = localStorage.getItem("refreshToken");
      const storedUser = localStorage.getItem("user");

      if (storedAccessToken && storedRefreshToken && storedUser) {
        setAccessToken(storedAccessToken);
        setRefreshToken(storedRefreshToken);
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.clear();
    }
  }, []);

  const login = (accessToken, refreshToken, userData) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setUser(userData);

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);

    localStorage.clear();
    window.location.reload(); // 🔄 로그아웃 후 UI 업데이트
  };

  // 🔹 API 요청 시 자동으로 Access Token 포함
  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
  });

  authAxios.interceptors.request.use(
    (config) => {
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  return (
    <AuthContext.Provider value={{ user, accessToken, refreshToken, login, logout, authAxios }}>
      {children}
    </AuthContext.Provider>
  );
};
