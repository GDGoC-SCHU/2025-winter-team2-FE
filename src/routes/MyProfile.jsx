import React, { useState, useEffect } from "react";
import { getUserProfile } from "../api/userApi";

const MyProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile();
        setUserProfile(profileData);
      } catch (error) {
        console.error("프로필 불러오기 실패:", error);
        setError("프로필 정보를 불러오는 데 실패했습니다.");
      }
    };
    fetchProfile();
  }, []);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div>
      <h2>내 프로필</h2>
      {userProfile ? (
        <div>
          <p>이메일: {userProfile.email}</p>
          <p>출생 연도: {userProfile.birthYear}</p>
          <p>성별: {userProfile.gender}</p>
        </div>
      ) : (
        <p>프로필 정보를 불러오는 중...</p>
      )}
    </div>
  );
};

export default MyProfile;
