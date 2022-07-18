import styled from "styled-components";

export const Movie = styled.div`
  margin-top: 15%;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0px 20px;
  &:hover {
    transform: scale(1.1);
  }
  img {
    border-radius: 10px;
  }
`;
