import { responsiveFontSizes } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { ITmdb, IReview } from "../interfaces/IApi";

export const useFetch = (id: string) => {
  const urlTvFind = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
  const urlMovieFind = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`;
  const urlReviewMovieFind = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=caafc650f33fc68a6f16bf46a5c6ee13&language=en-US&page=1`;
  const urlReviewTvFind = `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=caafc650f33fc68a6f16bf46a5c6ee13&language=en-US&page=1`;

  const [data, setData] = useState<ITmdb | null>(null);

  const [review, setReview] = useState<IReview | null>(null);

  const dataRequest = useRef({
    urlData: urlMovieFind,
    urlDataAlternative: urlTvFind,
  });

  const reviewRequest = useRef({
    urlReview: urlReviewMovieFind,
    urlReviewAlternative: urlReviewTvFind,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch(dataRequest.current.urlData);
        if (response.status === 404) {
          response = await fetch(dataRequest.current.urlDataAlternative);
        }
        const data = await response.json();
        setData(data);
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchData();
  }, [dataRequest]);

  useEffect(() => {
    async function fetchReviewData() {
      try {
        let response = await fetch(reviewRequest.current.urlReview);
        if (response.status === 404) {
          response = await fetch(reviewRequest.current.urlReviewAlternative);
        }
        const data = await response.json();
        setReview(data);
      } catch (err: any) {
        console.log(err);
      }
    }

    fetchReviewData();
  }, [reviewRequest]);
  return { data, review };
};
