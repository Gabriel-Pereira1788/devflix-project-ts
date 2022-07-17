import styled from "styled-components";

const primaryColor: string = "red";
const size: number = 25;

export const Nav = styled.nav`
  width: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const Title = styled.div`
  padding: 10px;
  width: 15%;
  text-align: center;
  a {
    color: ${primaryColor};
    font-size: ${size}px;
    font-weight: bold;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  li {
    margin: 0em 2em;
    .active {
      color: ${primaryColor};
    }
  }
`;
