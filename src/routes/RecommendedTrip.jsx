import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import{
    Container,
    Title,
    TripCard,
    InfoBox,
    MapImage,
    Button,

} from "../styles/RecommendedTrip";

const RecommendedTrip = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { tripDetails } = location.state || {}; // TripPlanner에서 전달된 데이터

  return (
    <Container>
      <Title>{tripDetails?.title || "추천 여행"}</Title>
      <p>{tripDetails?.date || "1일차 일정"}</p>

      {/* 여행지 리스트 */}
      {tripDetails?.places?.map((place, index) => (
        <TripCard key={index}>
          <div>
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
          <p>{place.distance}</p>
        </TripCard>
      ))}

      {/* 여행 정보 박스 */}
      <InfoBox>
        <h3>1일차 일정</h3>
        <p>예상 소요 금액: {tripDetails?.cost || "약 65,200원"}</p>
        <p>추천 장소: {tripDetails?.places.length || 3}곳</p>
        <p>이동 수단: {tripDetails?.transport || "자차"}</p>
      </InfoBox>

      {/* 지도 표시 */}
      <MapImage src="/assets/sample-map.png" alt="지도 이미지" />

      <Button onClick={() => navigate("/")}>홈으로</Button>
    </Container>
  );
};

export default RecommendedTrip;
