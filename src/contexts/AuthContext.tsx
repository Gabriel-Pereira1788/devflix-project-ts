import { createContext, useState, useEffect, ReactNode } from "react";
import { UserContext, initialValueContext } from "../interfaces/UserInterface";
import { useAuthentication } from "../hooks/useAuthentication";
import { onAuthStateChanged, User } from "firebase/auth";
import { useContext } from "react";

type Props = {
  children: ReactNode;
};

export const AuthContext = createContext<UserContext>(initialValueContext);

const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const { auth, loading } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext<UserContext>(AuthContext);
};
