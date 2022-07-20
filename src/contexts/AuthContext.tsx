import {
  createContext,
  useState,
  useEffect,
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

export const AuthContext = createContext<IContext>(initialValueContext);

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const { auth, loading } = useAuthentication();
  const [dataList, setDataList] = useState<IData_List>({
    moviesList: [],
    seriesList: [],
    randomMoviesList: null,
    randomSeriesList: null,
  });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      const responseMovies = await GetMovieList();
      const responseSeries = await GetSerieList();

      if (responseMovies && responseSeries) {
        const randomMoviesList = randomItem(responseMovies);
        const randomSeriesList = randomItem(responseSeries);

        setDataList((prevState) => ({
          ...prevState,
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
        }));
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
