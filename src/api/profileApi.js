import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// ✅ 프로필 정보 가져오기
export const fetchUserProfile = async () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      throw new Error("❌ Access Token이 없습니다.");
    }

    console.log("📌 저장된 Access Token:", accessToken);

    console.log("📌 프로필 API 요청 - Authorization 헤더 포함");

    // Authorization을 HTTP 헤더에 추가
    const response = await axios.get(`${API_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `${accessToken}`, 
        "Content-Type": "application/json", 
      },
      withCredentials: true, 
    });

    console.log("✅ 프로필 API 응답:", response.data);

    return response.data;
  } catch (error) {
    console.error("❌ 프로필 정보 가져오기 실패:", error.response?.data || error.message);
    
    // 🔍 HTTP 응답 코드 출력
    if (error.response) {
      console.error(`🔍 응답 코드: ${error.response.status}`);
      console.error(`🔍 응답 데이터:`, error.response.data);
    }

    throw error.response?.data || { message: "프로필 정보를 불러올 수 없습니다." };
  }
};
