import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Card } from "./styles";
type Props = {
  setCardUserOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardUser = ({ setCardUserOn }: Props) => {
  const { user } = useAuthContext();

  return (
    <Card>
      <button onClick={() => setCardUserOn(false)}>X</button>
      <h3>{user?.displayName}</h3>
      <button>Sair</button>
    </Card>
  );
};

export default CardUser;
