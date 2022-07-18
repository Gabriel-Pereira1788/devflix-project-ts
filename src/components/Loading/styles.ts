import styled, { keyframes } from "styled-components";

const SpinnerAnimation = keyframes`
0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid;
  border-color: red #000000f2 #000000f2;
  border-radius: 50%;
  animation: ${SpinnerAnimation} 1.5s infinite;
`;
