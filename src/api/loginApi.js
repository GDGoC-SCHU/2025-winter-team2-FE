import { authAxios } from "./authAxios";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const loginUser = async (userData) => {
  try {
    console.log("📌 로그인 요청 데이터:", userData);

    const response = await axios.post(`${API_BASE_URL}/users/login`, userData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("📌 로그인 API 응답:", response.data);

    let accessToken, refreshToken;

    // 🔹 응답이 문자열이면 정규식으로 추출
    if (typeof response.data === "string") {
      console.log("🔹 응답이 문자열입니다. 정규식 적용...");
      const accessTokenMatch = response.data.match(/Access Token:\s*([\w.-]+)/);
      const refreshTokenMatch = response.data.match(/Refresh Token:\s*([\w.-]+)/);

      if (!accessTokenMatch || !refreshTokenMatch) {
        throw new Error("❌ 토큰이 반환되지 않았습니다.");
      }

      accessToken = accessTokenMatch[1];
      refreshToken = refreshTokenMatch[1];
    } 
    // 🔹 응답이 JSON이면 JSON에서 직접 추출
    else if (typeof response.data === "object") {
      console.log("🔹 응답이 JSON입니다. 직접 추출...");
      accessToken = response.data.accessToken;
      refreshToken = response.data.refreshToken;

      if (!accessToken || !refreshToken) {
        throw new Error("❌ JSON 응답에 토큰이 없습니다.");
      }
    } else {
      throw new Error("❌ 알 수 없는 응답 형식입니다.");
    }

    // ✅ 토큰을 localStorage에 저장
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    // ✅ authAxios에 토큰 설정 (Authorization 헤더에 자동 추가됨)
    authAxios.defaults.headers.Authorization = `Bearer ${accessToken}`;

    return { accessToken, refreshToken };
  } catch (error) {
    console.error("❌ 로그인 실패:", error.response?.data || error.message);
    throw error.response?.data || { message: "로그인 실패" };
  }
};
