import styled, { keyframes } from "styled-components";

const ViewAnimation = keyframes`
    from{transform: translateY(-100%)}
    to{transform:translateY(0%)}
`;

export const Card = styled.div`
  display: flex;
  background-color: #000000f2;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 10%;
  right: 0;
  width: 200px;
  height: 200px;
  color: white;
  animation: ${ViewAnimation} 0.3s;
  border-radius: 10px;
  z-index: auto;

  button {
    font-weight: bold;
    font-size: 15px;
    transition: all 0.3s;
    &:hover {
      color: red;
    }
  }
`;
