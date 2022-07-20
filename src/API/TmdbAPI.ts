import { IDataMovie } from "../interfaces/IApi";

const KEY: string = process.env.REACT_APP_TMDB_KEY!;
const API_URL_BASE: string = "https://api.themoviedb.org/3";
const example: string =
  "https://api.themoviedb.org/3/discover/movie?api_key=caafc650f33fc68a6f16bf46a5c6ee13&language=pt-BR&with_genres=27";

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err: any) {
    console.log(err.message);
  }
};

const mountURL = (route: string, media: string): string =>
  `${API_URL_BASE}/discover/${media}?api_key=${KEY}&language=pt-BR&${route}`;

export const GetMovieList = async (): Promise<IDataMovie[]> => {
  return [
    {
      identify: "top",
      title: "Em alta",
      list: await fetchData(
        `${API_URL_BASE}/movie/top_rated?language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      identify: "action",
      title: "Ação",
      list: await fetchData(mountURL("with_genres=28", "movie")),
    },
    {
      identify: "comedy",
      title: "Comedia",
      list: await fetchData(mountURL("with_genres=35", "movie")),
    },
    {
      identify: "horror",
      title: "Terror",
      list: await fetchData(mountURL("with_genres=27", "movie")),
    },
    {
      identify: "romance",
      title: "Romance",
      list: await fetchData(mountURL("with_genres=10749", "movie")),
    },
    {
      identify: "documentaries",
      title: "Documentarios",
      list: await fetchData(mountURL("with_genres=99", "movie")),
    },
  ];
};

export const GetSerieList = async (): Promise<IDataMovie[]> => {
  return [
    {
      identify: "originals",
      title: "Originais netflix",
      list: await fetchData(
        `${API_URL_BASE}/discover/tv?api_key=${KEY}&language=pt-BR&with_networks=213`
      ),
    },
    {
      identify: "top",
      title: "Em alta",
      list: await fetchData(
        `${API_URL_BASE}/tv/top_rated?language=pt-BR&api_key=${KEY}`
      ),
    },
    {
      identify: "action",
      title: "Ação",
      list: await fetchData(mountURL("with_genres=10759", "tv")),
    },
    {
      identify: "comedy",
      title: "Comedia",
      list: await fetchData(mountURL("with_genres=35", "tv")),
    },
    {
      identify: "Mystery",
      title: "Misterio",
      list: await fetchData(mountURL("with_genres=9648", "tv")),
    },
    {
      identify: "romance",
      title: "Romance",
      list: await fetchData(mountURL("with_genres=10749", "tv")),
    },
    {
      identify: "documentaries",
      title: "Documentarios",
      list: await fetchData(mountURL("with_genres=99", "tv")),
    },
  ];
};
