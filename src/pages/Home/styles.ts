import styled from "styled-components";

export const Movie = styled.div`
  /* margin-top: 15%; */
  margin: 15% 20px;
  cursor: pointer;
  transition: all 0.3s;
  padding: 0px 20px;
  &:hover {
    transform: scale(1.1);
  }
  img {
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    min-width: 150px;
  }
`;
