import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchUserProfile } from "../api/profileApi";

const MyProfile = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      setError("로그인이 필요합니다.");
      return;
    }

    const getUserProfile = async () => {
      try {
        const userData = await fetchUserProfile();
        setProfile(userData);
      } catch (error) {
        setError(error.message);
      }
    };

    getUserProfile();
  }, [isAuthenticated]);

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  if (!profile) {
    return <p>프로필 정보를 불러오는 중...</p>;
  }

  return (
    <div>
      <h2>내 프로필</h2>
      <p><strong>이메일:</strong> {profile.email}</p>
     
      <p><strong>생년월일:</strong> {profile.birthDate}</p>
      <p><strong>성별:</strong> {profile.gender}</p>
    </div>
  );
};

export default MyProfile;
