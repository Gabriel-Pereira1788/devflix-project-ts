import { User } from "firebase/auth";
import { IDataMovie, IData_List } from "./IApi";

export interface IContext {
  user: User | null;
  loading: boolean;
  dataList: IData_List | null;
}

export const initialValueContext: IContext = {
  user: null,
  loading: false,
  dataList: null,
};
