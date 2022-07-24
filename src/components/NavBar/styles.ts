import styled from "styled-components";

const primaryColor: string = "red";
const size: number = 25;

export const Nav = styled.nav`
  width: 100%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  z-index: 1;
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
  list-style: none;
  li {
    display: block;
    color: white;
    margin: 0em 1.5em;
    font-weight: bold;
    .active {
      color: ${primaryColor};
    }
    a {
      font-size: clamp(0.5em, 1.5vw, 1.5em);
    }
    @media screen and (max-width: 580px) {
      display: none;
    }
  }
`;

export const Toggle = styled.button`
  display: none;
  background: none;
  &:hover {
    background: none;
    color: red;
  }
  @media screen and (max-width: 580px) {
    display: block;
  }
`;
