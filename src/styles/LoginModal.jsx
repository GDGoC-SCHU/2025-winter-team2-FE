
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 300px;
`;

export const CloseButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #ff6347;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;




