import {
  createContext,
  useEffect,
  useReducer,
  ReactNode,
  useContext,
} from "react";

//context
import { IContext, initialValueContext } from "../interfaces/IContext";
//api
import { IData_List } from "../interfaces/IApi";
//Authentication
import { useAuthentication } from "../hooks/useAuthentication";
import { onAuthStateChanged, User } from "firebase/auth";
//utils
import { randomItem } from "../utils/randomItem";
import { GetMovieList, GetSerieList } from "../API/TmdbAPI";

type Props = {
  children: ReactNode;
};

type State = {
  user: User | null;
  dataList: IData_List;
};

type Action =
  | { type: "INSERT_USER"; user: User | null }
  | { type: "INSERT_LIST"; list: IData_List };

const initialValueStates = {
  user: null,
  dataList: {
    moviesList: [],
    seriesList: [],
    randomMoviesList: null,
    randomSeriesList: null,
  },
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "INSERT_USER":
      return {
        ...state,
        user: action.user,
      };
    case "INSERT_LIST":
      return {
        ...state,
        dataList: action.list,
      };
  }
};

export const AuthContext = createContext<IContext>(initialValueContext);

const AuthContextProvider = ({ children }: Props) => {
  const { auth, loading } = useAuthentication();
  const [{ user, dataList }, dispatch] = useReducer(
    reducer,
    initialValueStates
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "INSERT_USER", user: user });
    });
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      const responseMovies = await GetMovieList();
      const responseSeries = await GetSerieList();

      if (responseMovies && responseSeries) {
        const randomMoviesList = randomItem(responseMovies);
        const randomSeriesList = randomItem(responseSeries);

        const DATA_LIST: IData_List = {
          moviesList: responseMovies,
          seriesList: responseSeries,
          randomMoviesList: {
            randomList: randomMoviesList,
            randomMedia: randomItem(randomMoviesList.list.results),
          },
          randomSeriesList: {
            randomList: randomSeriesList,
            randomMedia: randomItem(randomSeriesList.list.results),
          },
        };

        dispatch({ type: "INSERT_LIST", list: DATA_LIST });
      }
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, dataList }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext<IContext>(AuthContext);
};
