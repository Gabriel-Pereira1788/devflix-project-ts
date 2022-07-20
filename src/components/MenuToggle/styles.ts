import styled, { keyframes } from "styled-components";

export const List = styled.ul`
  width: 85%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  list-style: none;
  li {
    color: white;
    margin: 0em 2em;
    font-weight: bold;
    .active {
      color: red;
    }
    a {
      font-size: clamp(1em, 1.5vw, 1.5em);
    }
  }
`;

export const User = styled.li`
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

const displayMenu = keyframes`

  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0%);
  }
`;

export const MenuNav = styled.section`
  position: fixed;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121111;
  transition: all 0.5s;
  width: 100%;
  min-height: 100vh;

  animation: ${displayMenu} 0.5s;
  z-index: 1;
  @media screen and (max-width: 580px) {
    display: flex;
  }
`;

export const Button = styled.button`
  text-align: right;
  background: none;
  font-weight: bold;
  &:hover {
    background: none;
    color: red;
  }
`;
