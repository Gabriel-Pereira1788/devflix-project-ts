import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { Poster, WrapperInfo, Title, Overview } from "./styles";
//interface

type Props = {
  backdrop_path: string;
  title: string;
  overview: string;
  vote_average: number;
  children: ReactNode;
};

const MoviePoster = ({
  title,
  backdrop_path,
  overview,
  vote_average,
  children,
}: Props) => {
  return (
    <Poster
      background={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      id="main_poster"
    >
      <WrapperInfo>
        <article>
          <Title>{title}</Title>
          <Overview>{overview}</Overview>
          {children}
          <span>{vote_average}</span>
        </article>
      </WrapperInfo>
    </Poster>
  );
};

export default MoviePoster;
