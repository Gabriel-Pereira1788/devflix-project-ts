import { useParams } from "react-router-dom";
import { Container } from "../../GlobalStyles";
import { useFetch } from "../../hooks/useFetch";
//components
import MediaPoster from "../../components/MediaPoster/MediaPoster";
import Comment from "./Comment";
import NewComment from "./NewComment";
import Review from "./Review";
//styles
import { Wrapper, Title } from "./styles";
//interfaces
import { IContentReview } from "../../interfaces/IApi";
import { IDocument } from "../../interfaces/IDataBase";

import { useEffect, useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import Loading from "../../components/Loading/Loading";
import { useAuthContext } from "../../contexts/AuthContext";

const SingleMedia = () => {
  const { id, media } = useParams();
  const { user } = useAuthContext();
  const loadingUser: boolean = user === undefined;
  const URL_DATA: string = `https://api.themoviedb.org/3/${media?.toLowerCase()}/${id}?api_key=${
    process.env.REACT_APP_TMDB_KEY
  }&language=pt-BR`;
  const URL_REVIEW: string = `https://api.themoviedb.org/3/${media?.toLowerCase()}/${id}/reviews?api_key=${
    process.env.REACT_APP_TMDB_KEY
  }&language=pt-BR&page=1`;

  const { documents } = useFetchDocuments("comments");
  const { mediaData, mediaReview } = useFetch(URL_DATA, URL_REVIEW);
  const [allReviews, setNewReview] = useState<IContentReview[]>([]);

  const commentsById: any[] = documents?.filter(
    (doc: IDocument) => doc.media_id === id
  );

  useEffect(() => {
    if (mediaReview) {
      setNewReview([...mediaReview.results].reverse());
    }
  }, [mediaReview]);

  if (loadingUser || !mediaData?.backdrop_path) {
    return <Loading />;
  }
  return (
    <Container FlexContent="center" style={{ position: "absolute" }}>
      {mediaData && (
        <MediaPoster
          backdrop_path={mediaData.backdrop_path}
          title={mediaData.title}
          name={mediaData.name}
          overview={mediaData.overview}
        >
          <a href="#section_comment">
            <button>comentar</button>
          </a>
        </MediaPoster>
      )}
      <Title style={{ marginTop: "5%" }}>
        {allReviews && allReviews.length > 0
          ? "Resenhas"
          : "Sem resenhas no momento... Mas queremos saber sua opinião."}
      </Title>
      <Wrapper>
        {allReviews.length > 0 && (
          <Review
            key={allReviews[0].id}
            author={allReviews[0].author}
            content={allReviews[0].content}
            created_at={allReviews[0].created_at}
          />
        )}
      </Wrapper>
      <Wrapper id="section_comment">
        {commentsById &&
          commentsById.map(({ author, content, created_at }, index) => (
            <Comment
              key={index}
              author={author}
              content={content}
              created_at={created_at}
            />
          ))}
        <NewComment media_id={id!} />
      </Wrapper>
    </Container>
  );
};

export default SingleMedia;
