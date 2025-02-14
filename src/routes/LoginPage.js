import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LoginContainer,
  LoginButton,
  Title,
  Form,
  Input,
  Hr,
  SocialLoginContainer,
  SocialButton,
} from "../styles/LoginPage";
import SignupButton from "../components/SignupButton";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginClick = () => {
    console.log("아이디 : ", username);
    console.log("비밀번호 : ", password);
    // 실제 로그인 로직 추가해주세요
  };

  return (
    <LoginContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px",
        }}
      >
        <Title>로그인</Title>
        <Form
          onSubmit={(e) => {
            e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
            handleLoginClick();
          }}
        >
          <div>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // 아이디 입력 관리
              placeholder="아이디"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력 관리
              placeholder="비밀번호"
              required
            />
          </div>
          <Hr />
          <LoginButton onClick={handleLoginClick}>Login</LoginButton>
        </Form>
        <span>아직 회원이 아니시라면?</span>
        <hr />
        <Link to="/signup">
          <SignupButton />
        </Link>
        <hr />
        <span>소셜 로그인</span>
        <hr />
        <SocialLoginContainer>
          <SocialButton>🔵</SocialButton>
          <SocialButton>🟡</SocialButton>
          <SocialButton>🟢</SocialButton>
          <SocialButton>🍏</SocialButton>
        </SocialLoginContainer>
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
