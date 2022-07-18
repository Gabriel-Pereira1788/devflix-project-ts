import React from "react";
import { Poster, WrapperInfo } from "./styles";
//interface
import { ITmdb } from "../../../interfaces/ApiInterface";

const MoviePoster = ({
  title,
  backdrop_path,
  overview,
  vote_average,
}: ITmdb) => {
  return (
    <Poster
      background={`https://image.tmdb.org/t/p/original${backdrop_path}`}
      id="main_poster"
    >
      <WrapperInfo>
        <article>
          <h1>{title}</h1>
          <p>{overview}</p>
          <span>{vote_average}</span>
        </article>
      </WrapperInfo>
    </Poster>
  );
};

export default MoviePoster;
