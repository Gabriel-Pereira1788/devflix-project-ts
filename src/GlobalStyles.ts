import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        scroll-behavior: smooth;
    }
    body{

        min-height: 100vh;
        background-color: #000000f2;
        padding: 0;
        margin: 0;
        font-family: "Montserrat", sans-serif;
    }
    li,a{
        text-shadow: 0px 3px 4px #00000059;
        transition: all 0.3s;
        text-decoration: none;
        color: white;
        &:hover{
            color: #bbb;
        }
    }

    ul{
        list-style: none;
        li{
        
            text-decoration:none
        }
    }
    p{
        line-height: 30px;
        letter-spacing: 1px;
    }
    h1,h2,h3,h4,p,label,li{
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
    

`;

export default GlobalStyle;

type PropsContainer = {
  FlexContent: string;
};

export const Container = styled.main<PropsContainer>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.FlexContent};
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
