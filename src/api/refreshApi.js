import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 🔹 Refresh Token으로 새로운 Access Token 요청
export const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem("refreshToken");

    if (!refreshToken) {
      throw new Error("❌ Refresh Token이 없습니다.");
    }

    const response = await axios.post(`${API_BASE_URL}/users/refresh`, {
      refreshToken,
    });

    const newAccessToken = response.data.accessToken;

    if (!newAccessToken) {
      throw new Error("❌ 새 Access Token을 받을 수 없습니다.");
    }

    // ✅ 새 Access Token 저장
    localStorage.setItem("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("❌ Refresh Token 만료: 로그아웃 처리");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // 로그인 페이지로 이동
    throw error;
  }
};
