import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Title, DayCard, DayTitle, SpotList, SpotItem, Links } from "../styles/RecommendedTrip";

const RecommendedTrip = () => {
  const location = useLocation();
  const { itineraryData } = location.state || {};

  // ✅ 데이터가 없을 경우 로딩 상태 표시
  if (!itineraryData) {
    return <p>📌 추천된 여행 일정이 없습니다.</p>;
  }

  // ✅ `travelPlanDays`가 없는 경우 예외 처리
  if (!itineraryData.travelPlanDays || itineraryData.travelPlanDays.length === 0) {
    return <p>📌 여행 일정 데이터가 없습니다.</p>;
  }

  return (
    <Container>
      <Title>추천된 여행 일정 - {itineraryData?.location || "알 수 없음"}</Title>

      {itineraryData?.travelPlanDays?.map((day, index) => (
        <DayCard key={index}>
          <DayTitle>Day {day?.dayIndex || index + 1}</DayTitle>
          <SpotList>
            {day?.planSpots?.map((spot, i) => (
              <SpotItem key={i}>
                <strong>{spot?.name || "알 수 없는 장소"}</strong> - {spot?.category || "카테고리 없음"}
                <Links>
                  {spot?.naver_map_url && (
                    <a href={spot.naver_map_url} target="_blank" rel="noopener noreferrer">네이버 지도</a>
                  )}
                  {spot?.google_search_url && (
                    <a href={spot.google_search_url} target="_blank" rel="noopener noreferrer">구글 검색</a>
                  )}
                </Links>
              </SpotItem>
            ))}
          </SpotList>
        </DayCard>
      ))}
    </Container>
  );
};

export default RecommendedTrip;
