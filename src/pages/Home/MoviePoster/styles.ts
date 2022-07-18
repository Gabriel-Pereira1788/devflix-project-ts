import styled from "styled-components";

type Props = {
  background: string;
};

export const Poster = styled.section<Props>`
  transition: all 0.5s;
  width: 100%;
  height: 760px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: center;
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
  padding: 20px;
  article {
    max-width: 350px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
