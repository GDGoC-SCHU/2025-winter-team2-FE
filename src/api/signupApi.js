import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/register`, userData, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("📌 회원가입 API 응답:", response.data); 

    return response.data; //응답 데이터 반환
  } catch (error) {
    console.error("❌ 회원가입 실패:", error.response?.data || error.message);
    throw error.response?.data || { message: "회원가입 실패" };
  }
};
