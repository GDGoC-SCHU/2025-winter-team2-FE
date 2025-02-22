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
  ButtonContainer,
  Button
} from "../styles/TripPlanner"; 
import { fetchItinerary } from "../api/recommendApi"; 

const TripPlanner = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState([
    { id: 1, label: "📍 장소", placeholder: "여행할 도시를 입력하세요", value: "" },
    { id: 2, label: "🌟 선호", placeholder: "ex) 감성 카페, 맛집 투어, 액티비티...", value: "" },
  ]);

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleInputChange = (id, value) => {
    setInputs(inputs.map(input => (input.id === id ? { ...input, value } : input)));
  };

  //AI 여행 일정 요청 함수
  const handleGenerateItinerary = async () => {
    setLoading(true);
    setError(null);

    const location = inputs.find(input => input.label.includes("장소"))?.value;
    const theme = inputs.find(input => input.label.includes("선호"))?.value;

    if (!location || !theme) {
      setError("📌 장소 및 선호도를 입력해주세요.");
      setLoading(false);
      return;
    }

    // 여행 일수 계산 (종료 날짜 - 시작 날짜)
    const days = Math.max(1, Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)));

    try {
      const itineraryData = await fetchItinerary({ location, days, theme });

      navigate("/recommended", { state: { itineraryData } });
    } catch (error) {
      setError(error.message || "일정 생성에 실패했습니다.");
    } finally {
      setLoading(false);
    }
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
          <label>{input.label}</label> 
          <Input 
            placeholder={input.placeholder} 
            value={input.value} 
            onChange={(e) => handleInputChange(input.id, e.target.value)}
          />
        </InputBox>
      ))}

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ButtonContainer>
        <Button onClick={() => setShowCalendar(true)}>일정 선택</Button>
        <Button onClick={handleGenerateItinerary} disabled={loading}>
          {loading ? "일정 생성 중..." : "추천 받기"}
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default TripPlanner;
