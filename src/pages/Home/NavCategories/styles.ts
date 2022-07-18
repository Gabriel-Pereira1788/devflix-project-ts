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
      font-weight: bold;
      border-bottom: 1px solid white;
      cursor: pointer;
      padding: 10px 10px;
      text-transform: uppercase;
    }
  }
`;
