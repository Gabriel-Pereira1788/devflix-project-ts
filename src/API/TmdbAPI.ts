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

const mountURL = (route: string): string =>
  `${API_URL_BASE}/discover/movie?api_key=${KEY}&language=pt-BR&${route}`;

export const GetHomeList = async (): Promise<IDataMovie[]> => {
  return [
    {
      identify: "originals",
      title: "Originais netflix",
      list: await fetchData(
        `${API_URL_BASE}/discover/tv?api_key=${KEY}&language=pt-BR&with_networks=213`
      ),
    },
    {
      identify: "trending",
      title: "Recomendados",
      list: await fetchData(
        `${API_URL_BASE}/trending/all/week?language=pt-BR&api_key=${KEY}`
      ),
    },
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
      list: await fetchData(mountURL("with_genres=28")),
    },
    {
      identify: "comedy",
      title: "Comedia",
      list: await fetchData(mountURL("with_genres=35")),
    },
    {
      identify: "horror",
      title: "Terror",
      list: await fetchData(mountURL("with_genres=27")),
    },
    {
      identify: "romance",
      title: "Romance",
      list: await fetchData(mountURL("with_genres=10749")),
    },
    {
      identify: "documentaries",
      title: "Documentarios",
      list: await fetchData(mountURL("with_genres=99")),
    },
  ];
};
