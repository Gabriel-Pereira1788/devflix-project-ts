import { responsiveFontSizes } from "@mui/material";
import { useEffect, useState } from "react";
import { IError, ITmdb } from "../interfaces/IApi";

export const useFetch = (id: string) => {
  const urlTvFind = `https://api.themoviedb.org/3/tv/${id}?api_key=caafc650f33fc68a6f16bf46a5c6ee13&language=en-US`;
  const urlMovieFind = `https://api.themoviedb.org/3/movie/${id}?api_key=caafc650f33fc68a6f16bf46a5c6ee13&language=en-US`;
  const [data, setData] = useState<ITmdb | null>(null);
  const [url, setUrl] = useState<string>(urlMovieFind);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (response.status === 404) {
          throw new Error("Not find data");
        }
        const data = await response.json();
        setData(data);
      } catch (erro: any) {
        if (erro.message === "Not find data") {
          setUrl(urlTvFind);
        }
      }
    }
    fetchData();
  }, [url]);

  return { data };
};
