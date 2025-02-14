import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background=color: #f8f9fa;
  font-family: Arial, sans-serif;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding: 20px;
`;

export const Image = styled.img`
  margin: 25px;
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  margin: 25px;
  font-size: 2rem;
`;
export const Description = styled.p`
  padding: 25px;
  margin: 0;
  font-size: 1rem;
`;
