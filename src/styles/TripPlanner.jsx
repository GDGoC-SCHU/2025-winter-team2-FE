import styled from "styled-components";
export const Container = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 36px;
`;

export const DateText = styled.p`
  font-size: 18px;
  color: gray;
`;

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  background: #c5dbff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 16px;
  padding-left: 10px;
`;
export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;
export const IconWrapper = styled.div`
  cursor: pointer;
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
