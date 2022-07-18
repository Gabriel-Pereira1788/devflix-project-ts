import { useState } from "react";
//context
import { useAuthContext } from "../../contexts/AuthContext";
//styles
import { MoviesSection } from "./styles";
import { Container } from "../../GlobalStyles";
//components
import MoviePoster from "./MoviePoster/MoviePoster";
//interface
import { IDataMovie, ITmdb } from "../../interfaces/ApiInterface";
import NavCategories from "./NavCategories/NavCategories";

const Home = () => {
  const { homeList, randomData } = useAuthContext();
  const [moviePoster, setMoviePoster] = useState<ITmdb>(
    randomData!.randomMovie
  );
  const [moviesByCategory, setMoviesByCategory] = useState<IDataMovie>(
    randomData!.randomList
  );
  console.log(homeList);

  return (
    <Container FlexContent="space-between" style={{ position: "absolute" }}>
      {moviePoster && (
        <MoviePoster
          backdrop_path={moviePoster.backdrop_path}
          title={moviePoster.title}
          overview={moviePoster.overview}
          vote_average={moviePoster.vote_average}
        />
      )}
      <NavCategories setMoviesByCategory={setMoviesByCategory} />
      <MoviesSection>
        {moviesByCategory &&
          moviesByCategory.list.results.map((movie, index) => (
            <div key={index} onClick={() => setMoviePoster(movie)}>
              <a href="#main_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </a>
            </div>
          ))}
      </MoviesSection>
    </Container>
  );
};

export default Home;
