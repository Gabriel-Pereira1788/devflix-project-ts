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
    box-shadow: 2px 3px 10px 1px #00000073;
    border-radius: 10px;
    max-width: 300px;
    width: 100%;
    min-width: 150px;
  }
`;

export const MoreInformations = styled.button`
  background-color: #222222a6;
  width: 50%;
  cursor: pointer;
  span {
    color: white;
    margin-right: 5px;
  }
`;
