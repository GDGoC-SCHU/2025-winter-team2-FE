import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // 환경 변수에서 백엔드 URL 가져오기

// ✅ AI 여행 일정 생성 API 호출
export const fetchItinerary = async ({ location, days, theme }) => {
  try {
    console.log("📌 여행 일정 생성 요청:", { location, days, theme });

    const response = await axios.get(`http://15.164.120.40:8000/generate_itinerary`, {
      params: { location, days, theme }, // ✅ 쿼리 파라미터로 전달
    });

    console.log("✅ AI 여행 일정 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ AI 여행 일정 생성 실패:", error.response?.data || error.message);
    throw error.response?.data || { message: "여행 일정 생성 실패" };
  }
};
