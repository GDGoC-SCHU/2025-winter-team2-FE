import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// 사용자 프로필 정보 가져오기
export const getUserProfile = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 로그인 토큰 추가
      },
    });
    return response.data;
  } catch (error) {
    console.error("프로필 정보를 가져오는 데 실패했습니다.", error);
    throw error;
  }
};
