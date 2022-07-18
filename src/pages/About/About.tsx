import React from "react";
import { Container } from "./style";
type Props = {};

const About = (props: Props) => {
  return (
    <>
      <Container>
        <article>
          <h1>Sobre</h1>
          <p>
            Projeto dedicado <a href=""></a> solidificar meus conhecimentos em
            typescript e react. Autenticação do usuario e criaçao de usuario
            feita com o firebase API consumida:TMDB
          </p>
        </article>
      </Container>
    </>
  );
};

export default About;
