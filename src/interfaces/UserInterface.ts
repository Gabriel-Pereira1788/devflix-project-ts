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
