import styled from "styled-components";

const primaryColor: string = "red";
const size: number = 25;

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  background-color: black;
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
    color: white;
    margin: 0em 2em;
    .active {
      color: ${primaryColor};
    }
  }
`;

export const UserIcon = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.3s;
  span {
    margin-right: 10px;
    color: #999191f2;
  }
  &:hover {
    color: red;
  }
`;
