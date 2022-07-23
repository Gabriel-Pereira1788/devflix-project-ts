import React from "react";
import { Container } from "./style";
import Footer from "../../components/Footer/Footer";

const About = () => {
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
      <Footer />
    </>
  );
};

export default About;
