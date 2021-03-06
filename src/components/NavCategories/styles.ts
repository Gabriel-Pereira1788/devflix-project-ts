import styled from "styled-components";

interface Props {
  categoryOn: boolean;
}

export const Categories = styled.nav`
  margin: 5% 0%;
  width: 100%;
  padding: 15px;
  display: flex;
  text-align: center;
  justify-content: center;
  ul {
    display: flex;
  }
`;

export const List = styled.li<Props>`
  transition: all 0.3s;
  font-size: clamp(0.3em, 1vw, 1.5em);
  font-weight: bold;
  border-bottom: 2px solid;
  border-color: ${(props) => (props.categoryOn ? "red" : "white")};
  color: ${(props) => (props.categoryOn ? "red" : "white")};
  cursor: pointer;
  padding: 10px 5px;
  text-transform: uppercase;
`;
