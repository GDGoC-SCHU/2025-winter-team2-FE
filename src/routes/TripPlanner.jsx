import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Container,
  Title,
  DateText,
  Input,
  InputBox,
  IconWrapper,
  ButtonContainer,
  Button
} from "../styles/TripPlanner";  // 🔹 Label 삭제 (여기에 없으면 import 안함)

const TripPlanner = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [inputs, setInputs] = useState([
    { id: 1, label: "📍 장소", placeholder: "여행 가능한 장소 입력", value: "" },
    { id: 2, label: "🎯 여행 목적", placeholder: "ex) 가족 여행, 힐링 여행...", value: "" },
    { id: 3, label: "🚗 교통", placeholder: "ex) 기차, 비행기, 자차...", value: "" },
    { id: 4, label: "🏨 숙소", placeholder: "이용 중 숙박 입력", value: "" },
  ]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleInputChange = (id, value) => {
    setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
  };

  const handleRecommendClick = () => {
    const tripDetails = {
      title: "추천된 여행 일정",
      date: `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`,
      transport: inputs.find(input => input.label.includes("교통"))?.value || "자차",
      cost: "약 65,200원",
      places: [
        { name: inputs[0].value || "도두동 무지개해안도로", description: "₩0원", distance: "12.2KM / 약 25분" },
        { name: "시소 카이막 애월점", description: "대표 시소 카이막 ₩13,000", distance: "9.81KM / 약 21분" },
        { name: "9.81 파크", description: "홈페이지(1인) ₩52,500원", distance: "13.2KM / 약 21분" },
      ],
    };

    navigate("/recommended", { state: { tripDetails } });
  };

  return (
    <Container>
      <Title>여행 계획</Title>

      <DateText onClick={() => setShowCalendar(true)}>
        {startDate.toLocaleDateString()} - {endDate ? endDate.toLocaleDateString() : "날짜 선택"}
      </DateText>

      {showCalendar && (
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
          onClickOutside={() => setShowCalendar(false)}
        />
      )}

      {inputs.map((input) => (
        <InputBox key={input.id}>
          <label>{input.label}</label> {/* ✅ 라벨을 일반 `<label>`로 변경 */}
          <Input 
            placeholder={input.placeholder} 
            value={input.value} 
            onChange={(e) => handleInputChange(input.id, e.target.value)}
          />
        </InputBox>
      ))}

      <ButtonContainer>
        <Button onClick={() => setShowCalendar(true)}>일정 선택</Button>
        <Button onClick={handleRecommendClick}>추천 받기</Button>
      </ButtonContainer>
    </Container>
  );
};

export default TripPlanner;
