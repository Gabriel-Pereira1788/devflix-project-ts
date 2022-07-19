import { useParams } from "react-router-dom";
import { Container } from "../../GlobalStyles";
import { useFetch } from "../../hooks/useFetch";
//components
import MoviePoster from "../../components/MoviePoster/MoviePoster";
type Props = {};

const Movie = (props: Props) => {
  const { id } = useParams();
  const { data } = useFetch(id!);

  console.log(data);

  return (
    <Container FlexContent="center" style={{ position: "absolute" }}>
      {data && (
        <MoviePoster
          backdrop_path={data.backdrop_path}
          title={data.title}
          name={data.name}
          overview={data.overview}
          vote_average={data.vote_average}
        >
          <a>
            <button>Opinar</button>
          </a>
        </MoviePoster>
      )}
    </Container>
  );
};

export default Movie;
