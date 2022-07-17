import { Auth, User } from "firebase/auth";

export interface UserData {
  displayName?: string;
  email: string;
  password: string;
  confirmPassword?: string | number;
}

export const initialValue: UserData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export interface UserContext {
  user: User | null;
  loading: boolean;
}

export const initialValueContext: UserContext = {
  user: null,
  loading: false,
};
