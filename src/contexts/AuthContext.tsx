import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

//context
import { IContext, initialValueContext } from "../interfaces/IContext";
//api
import { IDataMovie, IRandomData } from "../interfaces/IApi";
//Authentication
import { useAuthentication } from "../hooks/useAuthentication";
import { onAuthStateChanged, User } from "firebase/auth";
//utils
import { randomItem } from "../utils/randomItem";
import { GetHomeList } from "../API/TmdbAPI";

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<IContext>(initialValueContext);

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const { auth, loading } = useAuthentication();
  const [homeList, setHomeList] = useState<IDataMovie[] | null>(null);
  const [randomData, setRandomData] = useState<IRandomData | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await GetHomeList();
      if (res) {
        setHomeList(res);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (homeList) {
      const randomList = randomItem(homeList);
      const randomMovie = randomItem(randomList.list.results);
      setRandomData({ randomList, randomMovie });
    }
  }, [homeList]);

  return (
    <AuthContext.Provider value={{ user, loading, homeList, randomData }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext<IContext>(AuthContext);
};
