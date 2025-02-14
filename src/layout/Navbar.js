import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navgation,
  NavBarContainer,
  ButtonContainer,
} from "../styles/Navgation";
import { StyledButton } from "../styles/Button";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <Navgation>
      <NavBarContainer>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          {" "}
          {/* 인덱스 페이지로 이동 */}
          SMART TRIP
        </Link>
        <ButtonContainer>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            {/* 로그인 페이지로 이동 */}
            <StyledButton>My Profile</StyledButton>
          </Link>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            {/* 로그인 페이지로 이동 */}
            <StyledButton>LOGIN/SIGN UP</StyledButton>
          </Link>
        </ButtonContainer>
      </NavBarContainer>
    </Navgation>
  );
}

export default NavBar;
