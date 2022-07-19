import { useState } from "react";
import { Link } from "react-router-dom";
//context
import { useAuthContext } from "../../contexts/AuthContext";
//styles
import { Movie } from "./styles";
import { Container } from "../../GlobalStyles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
//components
import MoviePoster from "../../components/MoviePoster/MoviePoster";
//interface
import { IDataMovie, ITmdb } from "../../interfaces/IApi";
import NavCategories from "./NavCategories/NavCategories";

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 4 },
};

const Home = () => {
  const { randomData } = useAuthContext();
  const [moviePoster, setMoviePoster] = useState<ITmdb>(
    randomData!.randomMovie
  );
  const [moviesByCategory, setMoviesByCategory] = useState<IDataMovie>(
    randomData!.randomList
  );

  return (
    <Container FlexContent="space-between" style={{ position: "absolute" }}>
      {moviePoster && (
        <MoviePoster
          backdrop_path={moviePoster.backdrop_path}
          title={moviePoster.title}
          overview={moviePoster.overview}
          vote_average={moviePoster.vote_average}
        >
          <Link to={`/movie/${moviePoster.id}`}>
            <button>opinar</button>
          </Link>
        </MoviePoster>
      )}
      <NavCategories setMoviesByCategory={setMoviesByCategory} />
      <AliceCarousel responsive={responsive} infinite={true}>
        {moviesByCategory &&
          moviesByCategory.list.results.map((movie, index) => (
            <Movie key={index} onClick={() => setMoviePoster(movie)}>
              <a href="#main_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </a>
            </Movie>
          ))}
      </AliceCarousel>
    </Container>
  );
};

export default Home;
