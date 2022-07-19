import { ChangeEvent, FormEvent, useState, useEffect } from "react";

//styles
import { ContainerInput } from "./styles";
import { ContainerForm } from "../../GlobalStyles";
//interface
import { IUser, initialValue } from "../../interfaces/IUser";

//hooks
import { useAuthentication } from "../../hooks/useAuthentication";

type Props = {};

const Register = (props: Props) => {
  const { createUser, error, loading } = useAuthentication();

  const [userRegister, setUserRegister] = useState<IUser>(initialValue);
  const [messageError, setMessageError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserRegister((previewValue: any) => ({
      ...previewValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userRegister);
    setMessageError(null);
    if (userRegister.password !== userRegister.confirmPassword) {
      setMessageError("As senhas não conferem");
    }

    const res = await createUser(userRegister);
    console.log(res);
  };

  useEffect(() => {
    if (error) {
      setMessageError(error);
    }
  }, [error]);

  return (
    <ContainerForm>
      <form onSubmit={handleSubmit}>
        <h3>Cadastrar-se</h3>
        <ContainerInput>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            id="displayName"
            placeholder="Insira seu nome"
            onChange={handleChange}
            required
          />
        </ContainerInput>
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
        <ContainerInput>
          <span>Confirmar senha:</span>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="repita sua senha"
            onChange={handleChange}
            required
          />
        </ContainerInput>
        {loading ? (
          <button disabled>carregando...</button>
        ) : (
          <button>cadastrar</button>
        )}
        {messageError && <p>{messageError}</p>}
      </form>
    </ContainerForm>
  );
};

export default Register;
