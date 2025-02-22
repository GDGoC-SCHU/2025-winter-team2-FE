import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Navgation,
  NavBarContainer,
  ButtonContainer,
} from "../styles/Navgation";
import { StyledButton } from "../styles/Button";
import { AuthContext } from "../contexts/AuthContext"; 

function NavBar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const [authState, setAuthState] = useState(isAuthenticated); // 상태 동기화

  //로그인 상태가 변경될 때 UI 업데이트
  useEffect(() => {
    setAuthState(isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Navgation>
      <NavBarContainer>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          SMART TRIP
        </Link>

        <ButtonContainer>
          {authState ? ( //로그인된 경우
            <>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <StyledButton>My Profile</StyledButton>
              </Link>
              <StyledButton onClick={logout}>LOGOUT</StyledButton>
            </>
          ) : ( //로그인되지 않은 경우
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
