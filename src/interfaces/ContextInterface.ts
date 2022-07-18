import { User } from "firebase/auth";
import { IDataMovie, IRandomData } from "./ApiInterface";

export interface IContext {
  user: User | null;
  loading: boolean;
  homeList: IDataMovie[] | null;
  randomData: IRandomData | null;
}

export const initialValueContext: IContext = {
  user: null,
  loading: false,
  homeList: null,
  randomData: null,
};
