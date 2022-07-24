import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//context
import { useAuthContext } from "../../contexts/AuthContext";
//styles
import { Serie, MoreInformations } from "./styles";
import { Container } from "../../GlobalStyles";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
//components
import SeriePoster from "../../components/MediaPoster/MediaPoster";
import Loading from "../../components/Loading/Loading";
import NavCategories from "../../components/NavCategories/NavCategories";
//interface
import { IDataMovie, ITmdb } from "../../interfaces/IApi";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const responsive = {
  0: { items: 2 },
  650: { items: 3 },
  1024: { items: 4 },
};

const Series = () => {
  const { dataList } = useAuthContext();
  const [seriePoster, setSeriePoster] = useState<ITmdb | null>(null);
  const [seriesByCategory, setSeriesByCategory] = useState<IDataMovie | null>(
    null
  );

  useEffect(() => {
    if (dataList?.randomSeriesList) {
      const { randomList, randomMedia } = dataList.randomSeriesList;
      setSeriesByCategory(randomList);
      setSeriePoster(randomMedia);
    }
  }, [dataList]);

  if (seriePoster === null || seriesByCategory === null) {
    return <Loading />;
  }
  return (
    <Container FlexContent="space-between" style={{ position: "absolute" }}>
      {seriePoster && (
        <SeriePoster
          backdrop_path={seriePoster.backdrop_path}
          title={seriePoster.title}
          name={seriePoster.name}
          overview={seriePoster.overview}
        >
          <Link to={`/${"Tv"}/${seriePoster.id}`}>
            <MoreInformations>
              <span>mais informações</span>
              <FontAwesomeIcon icon={faCircleExclamation} />
            </MoreInformations>
          </Link>
        </SeriePoster>
      )}
      {dataList?.seriesList && (
        <NavCategories
          setMediasByCategory={setSeriesByCategory}
          mediaList={dataList.seriesList}
          randomCategory={seriesByCategory.identify}
        />
      )}
      <AliceCarousel responsive={responsive} infinite={true}>
        {seriesByCategory &&
          seriesByCategory.list.results.map((movie, index) => (
            <Serie key={index} onClick={() => setSeriePoster(movie)}>
              <a href="/devflix-project-ts/#main_poster">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt=""
                />
              </a>
            </Serie>
          ))}
      </AliceCarousel>
    </Container>
  );
};

export default Series;
