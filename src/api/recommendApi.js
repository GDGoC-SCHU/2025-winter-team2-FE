import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; 

//AI 여행 일정 생성 API 호출
export const fetchItinerary = async ({ location, days, theme }) => {
  try {
    console.log("📌 여행 일정 생성 요청:", { location, days, theme });

    const response = await axios.get(`http://15.164.120.40:8000/generate_itinerary`, {
      params: { location, days, theme }, 
    });

    console.log("✅ AI 여행 일정 응답:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ AI 여행 일정 생성 실패:", error.response?.data || error.message);
    throw error.response?.data || { message: "여행 일정 생성 실패" };
  }
};
