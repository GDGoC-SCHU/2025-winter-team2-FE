import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// ✅ 프로필 정보 가져오기 (Authorization 필드에 토큰 추가)
export const fetchUserProfile = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
     console.log(accessToken);
    if (!accessToken) {
      throw new Error("❌ Access Token이 없습니다.");
    }

    console.log("📌 프로필 API 요청 - Authorization 필드 포함");

    const response = await axios.get(`${API_BASE_URL}/users/profile`, {
      params: { Authorization: accessToken }, // ✅ Authorization 필드 추가
    });

    console.log("✅ 프로필 API 응답:", response.data);

    return response.data;
  } catch (error) {
    console.error("❌ 프로필 정보 가져오기 실패:", error.response?.data || error.message);
    throw error.response?.data || { message: "프로필 정보를 불러올 수 없습니다." };
  }
};
