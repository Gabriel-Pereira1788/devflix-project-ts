import { ReactNode } from "react";
import { formatMaxLetters } from "../../utils/formatOverview";
import {
  Poster,
  WrapperInfo,
  Title,
  Overview,
  ButtonsContainer,
} from "./styles";
//interface

type Props = {
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  children: ReactNode;
};

const MoviePoster = ({
  title,
  name,
  backdrop_path,
  overview,
  children,
}: Props) => {
  return (
    <Poster
      background={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      id="main_poster"
    >
      <WrapperInfo>
        <article>
          <Title>{title ? title : name}</Title>
          <Overview>{formatMaxLetters(overview, 450)}</Overview>
          <ButtonsContainer>{children}</ButtonsContainer>
        </article>
      </WrapperInfo>
    </Poster>
  );
};

export default MoviePoster;
