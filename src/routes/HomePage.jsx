import React, { useState, useContext } from "react";
import {
  HomeContainer,
  ImgContainer,
  TextContainer,
  Image,
  Title,
  Description,
} from "../styles/Home";
import { useNavigate } from "react-router-dom";
import { StyledButton } from "../styles/Button";
import { AuthContext } from "../contexts/AuthContext"; // 로그인 상태 가져오기
import LoginModal from "../routes/LoginError"; // 로그인 모달

const HomePage = () => {
   const { isAuthenticated, logout } = useContext(AuthContext); // 로그인 여부 확인
  const [showModal, setShowModal] = useState(false); // 모달 상태 관리
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/planner"); // 로그인 상태면 planner 페이지로 이동
    } else {
      setShowModal(true); // 로그인 안 되어 있으면 모달 창 띄우기
    }
  };

  return (
    <HomeContainer>
      <ImgContainer>
        <Image src="/assets/img/img1.jpg" alt="firstImage" />
      </ImgContainer>
      <TextContainer>
        <Title>여행 준비는 SMART TRIP</Title>
        <Title>최상의 여행을 즐기고 싶다면?</Title>
        <Description>
          {/* 로그인 여부 확인 후 동작 */}
          <StyledButton onClick={handleButtonClick}>
            최적의 여행지 추천받기
          </StyledButton>
        </Description>
        <Image src="/assets/img/img2.jpg" alt="Second Image" />
      </TextContainer>

      {/* 로그인 모달 창 (로그인 안 되어 있을 때만 표시) */}
      {showModal && <LoginModal onClose={() => setShowModal(false)} />}
    </HomeContainer>
  );
};

export default HomePage;
