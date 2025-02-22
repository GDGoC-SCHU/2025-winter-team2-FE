import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const ProfileInfo = styled.div`
  text-align: left;
  padding: 10px 20px;
  font-size: 16px;

  p {
    margin: 10px 0;
    font-size: 18px;
  }

  strong {
    color: #007bff;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`;

export const LoadingMessage = styled.p`
  font-size: 16px;
  text-align: center;
  color: #666;
`;
