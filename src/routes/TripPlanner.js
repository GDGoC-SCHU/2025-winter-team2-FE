import React, { useState } from "react";
import { FaSearch } from "react-icons/fa"; // 돋보기 아이콘
import { AiOutlineClose } from "react-icons/ai"; // 닫기 아이콘



const TripPlanner = () => {
  const [inputs, setInputs] = useState([
    { id: 1, label: "장소", placeholder: "여행 가능한 장소 입력" },
    { id: 2, label: "여행 목적", placeholder: "ex) 가족 여행, 힐링 여행..." },
    { id: 3, label: "교통", placeholder: "ex) 기차, 비행기, 자차..." },
    { id: 4, label: "숙소", placeholder: "이용 중 숙박 입력" },
  ]);

  const handleRemove = (id) => {
    setInputs(inputs.filter((input) => input.id !== id));
  };

  return (
    <Container>
      <Title>여행 계획</Title>
      <DateText>August 21 - 23, 2024</DateText>
      {inputs.map((input) => (
        <InputBox key={input.id}>
          <FaSearch />
          <Input placeholder={input.placeholder} />
          <IconWrapper onClick={() => handleRemove(input.id)}>
            <AiOutlineClose />
          </IconWrapper>
        </InputBox>
      ))}
      <ButtonContainer>
        <Button>일정 선택</Button>
        <Button>추천 받기</Button>
      </ButtonContainer>
    </Container>
  );
};

export default TripPlanner;
