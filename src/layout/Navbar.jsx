import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Navgation,
  NavBarContainer,
  ButtonContainer,
} from "../styles/Navgation";
import { StyledButton } from "../styles/Button";
import { AuthContext } from "../contexts/AuthContext"; // 🔹 AuthContext 가져오기

function NavBar() {
  const { user, logout } = useContext(AuthContext); // 🔹 로그인 상태 및 로그아웃 함수 가져오기
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Navgation>
      <NavBarContainer>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          SMART TRIP
        </Link>

        <ButtonContainer>
          {user ? ( // 🔹 로그인된 경우
            <>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledButton>My Profile</StyledButton>
              </Link>
              <StyledButton onClick={logout}>LOGOUT</StyledButton>
            </>
          ) : ( // 🔹 로그인되지 않은 경우
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <StyledButton>LOGIN/SIGN UP</StyledButton>
            </Link>
          )}
        </ButtonContainer>
      </NavBarContainer>
    </Navgation>
  );
}

export default NavBar;
