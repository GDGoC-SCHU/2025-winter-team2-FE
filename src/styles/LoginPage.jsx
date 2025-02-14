import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin: 10px 0;
  display: block;
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Hr = styled.hr`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ccc;
`;

export const LoginButton = styled.button`
  background: #228be6;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 1rem;
  cursor: pointer;
  font-size: 1.5rem;

  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

export const SocialLoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-top: 20px;
`;

export const SocialButton = styled.button`
  display: inline-block;
  background: none;
  border: none;
  font-size: 1.5rem;
  margin-right: 10px;
  cursor: pointer;
`;
