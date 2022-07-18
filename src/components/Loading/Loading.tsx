import React from "react";
import { Spinner } from "./styles";
import { Container } from "../../GlobalStyles";

const Loading = () => {
  return (
    <Container FlexContent="center">
      <Spinner></Spinner>
    </Container>
  );
};

export default Loading;
