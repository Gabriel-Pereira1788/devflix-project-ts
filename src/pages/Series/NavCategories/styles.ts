import styled from "styled-components";

export const Categories = styled.nav`
  margin: 5% 0%;
  width: 100%;
  padding: 15px;
  display: flex;
  text-align: center;
  justify-content: center;
  ul {
    display: flex;
    li {
      font-size: clamp(0.3em, 1vw, 1.5em);
      font-weight: bold;
      border-bottom: 1px solid white;
      cursor: pointer;
      padding: 10px 5px;
      text-transform: uppercase;
    }
  }
`;
