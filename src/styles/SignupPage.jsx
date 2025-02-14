// src/styles/SignupPage.jsx
import styled from "styled-components";

export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 100px;
  border-radius: 8px;
`;

export const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const SubmitButton = styled.button`
  background: #228be6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;
