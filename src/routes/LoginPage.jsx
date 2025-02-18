import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginButton,
  Title,
  Form,
  Input,
  Hr,
} from "../styles/LoginPage";
import SignupButton from "../components/SignupButton";
import { AuthContext } from "../contexts/AuthContext"; // 🔹 AuthContext 불러오기
import { loginUser } from "../api/loginApi"; // 🔹 로그인 API 호출

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();

    try {
      // 🔹 API 호출 → Access Token, Refresh Token, User 정보 가져오기
      const { accessToken, refreshToken, user } = await loginUser({ email, password });
      console.log("✅ 로그인 성공:", { accessToken, refreshToken, user });

      // 🔹 AuthContext에 로그인 정보 저장
      login(accessToken, refreshToken, user);

      // 🔹 로컬스토리지에 저장 (새로고침해도 유지됨)
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));

      // 🔹 로그인 후 홈으로 이동
      navigate("/");

    } catch (error) {
      console.error("❌ 로그인 실패:", error);
      setError(error.message || "로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <LoginContainer>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px" }}>
        <Title>로그인</Title>
        <Form onSubmit={handleLoginClick}>
          <div>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Hr />
          <LoginButton type="submit">Login</LoginButton>
        </Form>
        <span>아직 회원이 아니시라면?</span>
        <hr />
        <Link to="/signup">
          <SignupButton />
        </Link>
        <hr />
      </div>
    </LoginContainer>
  );
};

export default LoginPage;
