import { ChangeEvent, FormEvent, useEffect, useState } from "react";

//styles
import { ContainerInput } from "./styles";
import { ContainerForm } from "../../GlobalStyles";
//interface
import { UserData, initialValue } from "../../interfaces/UserInterface";
import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  const [userLogin, setUserLogin] = useState<UserData>(initialValue);
  const [messageError, setMessageError] = useState<string | null>(null);
  const { loginAccount, loading, error } = useAuthentication();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserLogin((previewValue: any) => ({
      ...previewValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userLogin);
    setMessageError(null);

    await loginAccount(userLogin);
  };

  useEffect(() => {
    if (error) {
      setMessageError(error);
    }
  }, [error]);

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <h3>Entrar</h3>
        <ContainerInput>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Insira seu E-mail"
            onChange={handleChange}
            required
          />
        </ContainerInput>
        <ContainerInput>
          <span>Senha:</span>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Insira sua senha"
            onChange={handleChange}
            required
          />
        </ContainerInput>
        {loading ? (
          <button disabled>Carregando...</button>
        ) : (
          <button>Entrar</button>
        )}
        {messageError && <p>{messageError}</p>}
      </form>
    </ContainerForm>
  );
};

export default Login;
