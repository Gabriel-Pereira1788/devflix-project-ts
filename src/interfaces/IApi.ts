interface List {
  page: number;
  results: ITmdb[];
  total_pages: number;
  total_results: number;
}

export interface IRandomData {
  randomList: IDataMovie;
  randomMovie: ITmdb;
}

export interface IDataMovie {
  identify: string;
  title: string;
  list: List;
}

export interface ITmdb {
  success: boolean;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IError {
  success: boolean;
  status_code?: number;
  status_message?: string;
}
