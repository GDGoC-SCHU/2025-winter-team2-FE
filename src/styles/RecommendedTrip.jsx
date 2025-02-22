import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

export const DayCard = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const DayTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;

export const SpotList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const SpotItem = styled.li`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-3px);
  }

  strong {
    font-size: 16px;
    color: #007bff;
  }
`;

export const Links = styled.div`
  margin-top: 8px;

  a {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    margin-right: 10px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
