import { useParams } from "react-router-dom";
import { Container } from "../../GlobalStyles";
import { useFetch } from "../../hooks/useFetch";
//components
import MoviePoster from "../../components/MoviePoster/MoviePoster";
import Review from "./Review";
import NewReview from "./NewReview";
//styles
import { ButtonsContainer, Wrapper } from "./styles";
import { useAuthContext } from "../../contexts/AuthContext";
//interfaces

import { IContentReview } from "../../interfaces/IApi";
import { useEffect, useState } from "react";

type Props = {};

const Movie = (props: Props) => {
  const { user } = useAuthContext();
  const { id } = useParams();
  const { data, review } = useFetch(id!);
  const [allReviews, setNewReview] = useState<IContentReview[] | null>(null);

  console.log(review);

  useEffect(() => {
    if (review) {
      setNewReview(review.results);
    }
  }, [review]);

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
          <ButtonsContainer>
            <a href="#section_reviews">
              <button>Commennt</button>
            </a>
          </ButtonsContainer>
        </MoviePoster>
      )}
      <h1 style={{ marginTop: "5%" }} id="section_reviews">
        {allReviews && allReviews.length > 0
          ? "Reviews"
          : "No have reviews for this in moment...be the first do add a review."}
      </h1>
      <Wrapper>
        <NewReview />
        {allReviews &&
          allReviews
            .reverse()
            .map(({ author, content }, index) => (
              <Review key={index} author={author} content={content} />
            ))}
      </Wrapper>
    </Container>
  );
};

export default Movie;
