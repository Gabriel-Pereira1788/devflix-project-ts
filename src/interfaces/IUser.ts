export interface IUser {
  displayName?: string;
  email: string;
  password: string;
  confirmPassword?: string | number;
}

export const initialValue: IUser = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
