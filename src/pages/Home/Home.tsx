import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//context
import { useAuthContext } from "../../contexts/AuthContext";
//styles
import { Movie, MoreInformations } from "./styles";
import { Container } from "../../GlobalStyles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
//components
import MoviePoster from "../../components/MediaPoster/MediaPoster";
import Loading from "../../components/Loading/Loading";
//interface
import { IDataMovie, ITmdb } from "../../interfaces/IApi";
import NavCategories from "../../components/NavCategories/NavCategories";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
//responsivity carousel
const responsive = {
  0: { items: 2 },
  650: { items: 3 },
  1024: { items: 4 },
};

const Home = () => {
  const { dataList } = useAuthContext();
  const [moviePoster, setMoviePoster] = useState<ITmdb | null>(null);
  const [moviesByCategory, setMoviesByCategory] = useState<IDataMovie | null>(
    null
  );

  useEffect(() => {
    if (dataList?.randomMoviesList) {
      const { randomList, randomMedia } = dataList.randomMoviesList;
      setMoviesByCategory(randomList);
      setMoviePoster(randomMedia);
    }
  }, [dataList]);

  if (moviePoster === null || moviesByCategory === null) {
    return (
      <Container FlexContent="center">
        <Loading />
      </Container>
    );
  }
  return (
    <Container FlexContent="space-between" style={{ position: "absolute" }}>
      {moviePoster && (
        <MoviePoster
          backdrop_path={moviePoster.backdrop_path}
          title={moviePoster.title}
          name={moviePoster.name}
          overview={moviePoster.overview}
        >
          <Link to={`/${"Movie"}/${moviePoster.id}`}>
            <MoreInformations>
              <span>mais informações</span>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </MoreInformations>
          </Link>
        </MoviePoster>
      )}
      {moviesByCategory.identify && dataList?.moviesList && (
        <NavCategories
          setMediasByCategory={setMoviesByCategory}
          mediaList={dataList.moviesList}
          randomCategory={moviesByCategory.identify}
        />
      )}
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
