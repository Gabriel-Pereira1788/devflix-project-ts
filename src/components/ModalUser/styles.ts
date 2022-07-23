import styled, { keyframes } from "styled-components";

export const Title = styled.div`
  width: 100%;
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: red;
    font-size: 2.5em;
    font-weight: bold;
  }
`;

const ViewModal = keyframes`
    from{
      visibility: hidden;
    }
    to{
      visibility: visible;
    }
`;

export const UserInterface = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  height: 450px;
  background-color: #1c1b1b;
  border-radius: 10px;
  button {
    font-weight: bold;
    background: none;
    color: #fff;
    &:hover {
      background: none;
      color: red;
    }
  }
`;

export const Modal = styled.section`
  position: fixed;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0009;
  transition: visibility 0.5s;
  animation: ${ViewModal} 0.3s;
  border-radius: 15px;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const InfoUser = styled.ul`
  width: 52%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 16%;
`;

export const ExitModal = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  button {
    position: relative;
    top: -10px;
    right: -5px;
    font-size: 22px;
    padding: 0;
    width: auto;
  }
`;

export const LogoutUserSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  padding: 15px;
  border-top: 1px solid #787171;
  button {
    font-size: 15px;
  }
`;
//Refatorar visualização do modal.
