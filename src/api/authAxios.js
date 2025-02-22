import axios from "axios";
import { refreshAccessToken } from "./refreshApi"; // Refresh Token API

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const authAxios = axios.create({
  baseURL: API_BASE_URL,
});

// ✅ 모든 요청에 Access Token 자동 추가
authAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Access Token 만료 시 자동 갱신
authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      console.warn("🔹 Access Token 만료. Refresh Token으로 재발급 시도...");

      try {
        const newAccessToken = await refreshAccessToken();
        if (newAccessToken) {
          error.config.headers.Authorization = `Bearer ${newAccessToken}`;
          return axios(error.config); // 요청 재시도
        }
      } catch (refreshError) {
        console.error("❌ Refresh Token 만료. 로그아웃 처리");
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login"; // 로그인 페이지로 이동
      }
    }
    return Promise.reject(error);
  }
);
