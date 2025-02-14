// src/routes/SignupPage.jsx
import React, { useState } from "react";
import {
  SignupContainer,
  Title,
  Form,
  Input,
  Label,
  SubmitButton,
} from "../styles/SignupPage";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직 추가
    console.log("아이디:", username);
    console.log("비밀번호:", password);
    console.log("생년월일:", birthDate);
    console.log("성별:", gender);
  };

  return (
    <SignupContainer>
      <div>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="username">아이디</Label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="아이디"
            required
          />

          <Label htmlFor="password">비밀번호</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
            required
          />

          <Label htmlFor="confirmPassword">비밀번호 확인</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="비밀번호 확인"
            required
          />

          <Label htmlFor="birthDate">생년월일</Label>
          <Input
            type="text"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            placeholder="ex) 20xx.xx.xx"
            required
          />

          <Label htmlFor="gender">성별</Label>
          <Input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="남성, 여성"
            required
          />

          <SubmitButton type="submit">가입</SubmitButton>
        </Form>
      </div>
    </SignupContainer>
  );
};

export default SignupPage;
