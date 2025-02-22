import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { fetchUserProfile } from "../api/profileApi";
import { ProfileContainer, Title, ProfileInfo, ErrorMessage, LoadingMessage } from "../styles/MyProfile";

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
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!profile) {
    return <LoadingMessage>프로필 정보를 불러오는 중...</LoadingMessage>;
  }

  return (
    <ProfileContainer>
      <Title>내 프로필</Title>
      <ProfileInfo>
        <p><strong>이메일:</strong> {profile.email}</p>
        <p><strong>생년월일:</strong> {profile.birthDate}</p>
        <p><strong>성별:</strong> {profile.gender}</p>
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default MyProfile;
