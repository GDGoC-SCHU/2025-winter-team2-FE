import React from "react";
import {
    ModalOverlay,
    ModalContent,
    CloseButton,
   
  } from "../styles/LoginModal";
const LoginModal = ({ onClose }) => {
    return (
      <ModalOverlay>
        <ModalContent>
          <h2>로그인하세요</h2>
          <p>이 기능을 사용하려면 로그인이 필요합니다.</p>
          <CloseButton onClick={onClose}>닫기</CloseButton>
        </ModalContent>
      </ModalOverlay>
    );
  };
  export default LoginModal;