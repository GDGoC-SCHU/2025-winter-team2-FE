import React from "react";
import {
  HomeContainer,
  ImgContainer,
  TextContainer,
  Image,
  Title,
  Description,
} from "../styles/Home";
import { StyledButton } from "../styles/Button";

const HomePage = () => {
  return (
    <HomeContainer>
      <ImgContainer>
        <Image src="/assets/img/img1.jpg" alt="firstImage" />
      </ImgContainer>
      <TextContainer>
        <Title>여행 준비는 SMART TRIP</Title>
        <Title>최상의 여행을 즐기고 싶다면?</Title>
        <Description>
          <StyledButton>최적의 여행지 추천받기</StyledButton>
        </Description>
        <Image src="/assets/img/img2.jpg" alt="Second Image" />
      </TextContainer>
    </HomeContainer>
  );
};

export default HomePage;
