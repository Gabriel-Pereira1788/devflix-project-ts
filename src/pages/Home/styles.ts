import styled from "styled-components";

export const MoviesSection = styled.section`
  width: 100%;
  height: 556px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  div {
    cursor: pointer;
    transition: all 0.3s;
    padding: 0px 20px;
    &:hover {
      transform: scale(1.2);
    }
    img {
      border-radius: 10px;
    }
  }
`;
