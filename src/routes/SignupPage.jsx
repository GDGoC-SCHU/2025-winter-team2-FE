import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../api/signupApi";
import { loginUser } from "../api/loginApi"; // 🔹 로그인 API 호출
import { AuthContext } from "../contexts/AuthContext"; // 🔹 AuthContext 추가
import {
  SignupContainer,
  Title,
  Form,
  Input,
  Label,
  SubmitButton,
} from "../styles/SignupPage";

const SignupPage = () => {
  const { login } = useContext(AuthContext); // 🔹 로그인 상태 관리
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    const userData = {
      email,
      password,
      confirmPassword,
      birthYear,
      gender,
    };
  
    console.log("📌 전송할 회원가입 데이터:", userData);
  
    try {
      // 🔹 회원가입 API 호출
      const signupResponse = await signupUser(userData);
      console.log("✅ 회원가입 성공:", signupResponse);
  
      setSuccessMessage("회원가입이 성공적으로 완료되었습니다!");
      setError(null);
  
      // 🔹 회원가입이 완료되면 로그인 API 호출
      console.log("📌 자동 로그인 시도...");
      const loginResponse = await loginUser({ email, password });
      console.log("✅ 자동 로그인 성공:", loginResponse);
  
      const { accessToken, refreshToken, user } = loginResponse;
  
      // 🔹 로그인 정보 저장
      login(accessToken, refreshToken, user);
  
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
  
      // 🔹 로그인 후 홈으로 이동
      navigate("/");
    } catch (error) {
      console.error("❌ 회원가입 또는 로그인 실패:", error.response?.data || error.message);
      setError(error.response?.data?.message || "회원가입 후 로그인에 실패했습니다.");
    }
  };
  

  return (
    <SignupContainer>
      <div>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일"
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

          <Label htmlFor="birthYear">출생 연도</Label>
          <Input
            type="text"
            id="birthYear"
            value={birthYear}
            onChange={(e) => setBirthYear(e.target.value)}
            placeholder="ex) 1990"
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

          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

          <SubmitButton type="submit">가입</SubmitButton>
        </Form>
      </div>
    </SignupContainer>
  );
};

export default SignupPage;
