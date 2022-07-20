interface List {
  page: number;
  results: ITmdb[];
  total_pages: number;
  total_results: number;
}

export interface IRandomData {
  randomList: IDataMovie;
  randomMedia: ITmdb;
}

export interface IDataMovie {
  identify: string;
  title: string;
  list: List;
}

export interface IData_List {
  moviesList: IDataMovie[];
  seriesList: IDataMovie[];
  randomMoviesList: IRandomData | null;
  randomSeriesList: IRandomData | null;
}
export interface ITmdb {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  name: string;
  vote_average: number;
}

export interface IContentReview {
  author: string;
  content: string;
  created_at?: string;
}
export interface IReview {
  results: IContentReview[];
}
