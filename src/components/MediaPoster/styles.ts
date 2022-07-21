import styled from "styled-components";

type Props = {
  background: string;
};

export const ButtonsContainer = styled.div`
  width: 100%;
  align-items: flex-start;
  button {
    margin-right: 15px;
  }
  span {
    font-weight: bold;

    color: green;
  }
`;

export const Poster = styled.section<Props>`
  transition: all 0.5s;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (min-width: 1800px) {
    height: 900px;
  }
  @media screen and (max-width: 600px) {
    height: 450px;
  }
`;

export const WrapperInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-image: linear-gradient(
    to top,
    #000000e6,
    17%,
    #0000007a,
    75%,
    #1c1c1c00
  );
  padding: 5px;
  article {
    margin-top: 3.5em;
    padding: 0px 20px;
    max-width: 600px;
    min-width: 250px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  text-shadow: 0px 3px 5px black;
  text-transform: uppercase;
  font-size: clamp(1.5em, 2.5vw, 2.5em);
  color: red;
  text-align: left;
`;

export const Overview = styled.p`
  margin: 2rem 0;
  text-shadow: 0px 3px 5px black;

  text-align: justify;
`;
