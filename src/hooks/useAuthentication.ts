import { useState, useEffect } from "react";
import { db, auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

//interface
import { IUser } from "../interfaces/IUser";

export const useAuthentication = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [cancelled, setCancelled] = useState<boolean>(false);

  const ERRORS_MESSAGES = {
    Password: "Senha fraca, minimo 6 caracteres.",
    "email-already": "Email ja cadastrado.",
    "user-not-found": "Usuário não encontrado.",
    "wrong-password": "Senha incorreta.",
    "too-many-requests": "Acesso a conta temporariamente desabilitado.",
    default: "Erro no sistema ,tente mais tarde.",
  };

  function checkCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data: IUser) => {
    checkCancelled();

    setError(null);
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data!.email,
        data!.password
      );
      await updateProfile(user, { displayName: data.displayName });
      setLoading(false);
      return user;
    } catch (error: any) {
      console.log(error.message);

      let SystemError: string[];

      SystemError = Object.entries(ERRORS_MESSAGES).find((msg) =>
        error.message.includes(msg[0])
      )!;

      setError(SystemError[1]);
      setLoading(false);
    }
  };

  const signOutAccount = () => {
    checkCancelled();

    signOut(auth);
  };

  const loginAccount = async (data: IUser) => {
    checkCancelled();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data!.email, data!.password);
      setLoading(false);
      return;
    } catch (error: any) {
      console.log(error.message);

      let SystemError: string[];

      SystemError = Object.entries(ERRORS_MESSAGES).find((msg) =>
        error.message.includes(msg[0])
      )!;

      setError(SystemError[1]);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { auth, createUser, error, loading, signOutAccount, loginAccount };
};
