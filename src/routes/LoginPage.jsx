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
import { AuthContext } from "../contexts/AuthContext"; 
import { loginUser } from "../api/loginApi"; 

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { accessToken, refreshToken } = await loginUser({ email, password });

      login(accessToken, refreshToken); 
      navigate("/"); 
    } catch (error) {
      setError("로그인 실패: 이메일 또는 비밀번호를 확인하세요.");
    }
  };

  return (
    <LoginContainer>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px" }}>
        <Title>로그인</Title>
        <Form onSubmit={handleLogin}>
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
