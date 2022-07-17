import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        height: 100vh;
        background-color: #000000f2;
        padding: 0;
        margin: 0;
        font-family: "Montserrat", sans-serif;
    }
    a{
        transition: all 0.3s;
        text-decoration: none;
        color: white;
        &:hover{
            color: #bbb;
        }
    }
    h1,h2,h3,h4,p,label{
        color: #fff;
        font-family: "Montserrat", sans-serif;
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        max-width: 400px;
        width: 100%;
        height: auto;
        margin:100px 0;

        button{
            background-color: #850000;
            color: #fff;
            text-align: center;
            cursor: pointer;
            border-radius: 10px;
            width: 120px;
            font-weight: bold;
            border: none;
            padding: 10px 15px;
            font-size: 1em;
            &:hover{
                transition: all 0.4s;
                background-color: red;
                color: #fff;
            }
            &:disabled{
                background-color: #aaa;
            }
        }
    }
   
    input{
        background: none;
        outline: none;
        border: none;
        border-bottom: 1px solid #ffffff7a;
        padding: 20px 0px;
        color: white;
    }
    input::placeholder,
    textarea::placeholder {
    
    font-family: "Montserrat", sans-serif;
    }

`;

export default GlobalStyle;

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerForm = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    background-color: #fd4949c9;
    color: white;
    text-align: center;
  }
`;
