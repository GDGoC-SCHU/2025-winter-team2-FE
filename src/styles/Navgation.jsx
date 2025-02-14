import styled from "styled-components";

export const Navgation = styled.nav`
  background: linear-gradient(90deg, white);
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1500px;
  width: 100%;
  padding: 10px 20px;
`;

export const ButtonContainer = styled.div`
  display: flex; /* 수평 정렬 */
  gap: 10px; /* 버튼 간격 */
`;
