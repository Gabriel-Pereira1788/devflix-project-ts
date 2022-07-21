import { useParams } from "react-router-dom";
import { Container } from "../../GlobalStyles";
import { useFetch } from "../../hooks/useFetch";
//components
import MediaPoster from "../../components/MediaPoster/MediaPoster";
import Review from "./Review";
import NewReview from "./NewReview";
//styles
import { ButtonsContainer, Wrapper, Title } from "./styles";
//interfaces

import { IContentReview } from "../../interfaces/IApi";
import { IDocument } from "../../interfaces/IDataBase";

import { useEffect, useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const SingleMedia = () => {
  const { id, media } = useParams();

  const URL_DATA = `https://api.themoviedb.org/3/${media?.toLowerCase()}/${id}?api_key=${
    process.env.REACT_APP_TMDB_KEY
  }&language=pt-BR`;
  const URL_REVIEW = `https://api.themoviedb.org/3/${media?.toLowerCase()}/${id}/reviews?api_key=${
    process.env.REACT_APP_TMDB_KEY
  }&language=pt-BR&page=1`;

  const { documents, loading } = useFetchDocuments("reviews");
  const { mediaData, mediaReview } = useFetch(URL_DATA, URL_REVIEW);
  const [allReviews, setNewReview] = useState<IContentReview[]>([]);

  const reviewsById: any[] = documents?.filter(
    (doc: IDocument) => doc.media_id === id
  );

  useEffect(() => {
    if (reviewsById && mediaReview) {
      setNewReview([...mediaReview.results, ...reviewsById].reverse());
      console.log(allReviews);
    }
  }, [mediaReview, documents, id]);

  return (
    <Container FlexContent="center" style={{ position: "absolute" }}>
      {mediaData && (
        <MediaPoster
          backdrop_path={mediaData.backdrop_path}
          title={mediaData.title}
          name={mediaData.name}
          overview={mediaData.overview}
          vote_average={mediaData.vote_average}
        >
          <ButtonsContainer>
            <a href="#section_reviews">
              <button>comentar</button>
            </a>
          </ButtonsContainer>
        </MediaPoster>
      )}
      <Title style={{ marginTop: "5%" }} id="section_reviews">
        {allReviews && allReviews.length > 0
          ? "Resenhas"
          : "Sem resenhas no momento... Seja o primeiro a adicionar uma resenha."}
      </Title>
      <Wrapper>
        <NewReview media_id={id!} />
        {allReviews &&
          allReviews.map(({ author, content, created_at }, index) => (
            <Review
              key={index}
              author={author}
              content={content}
              created_at={created_at}
            />
          ))}
      </Wrapper>
    </Container>
  );
};

export default SingleMedia;
