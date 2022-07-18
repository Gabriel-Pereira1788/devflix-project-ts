import React from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";
import { Card } from "./styles";
type Props = {
  setCardUserOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const CardUser = ({ setCardUserOn }: Props) => {
  const { user } = useAuthContext();
  const { signOutAccount } = useAuthentication();

  const handleSignOut = () => {
    signOutAccount();
    setCardUserOn(false);
  };

  return (
    <Card>
      <button onClick={() => setCardUserOn(false)}>X</button>
      <h3>{user?.displayName}</h3>
      <button onClick={handleSignOut}>Sair</button>
    </Card>
  );
};

export default CardUser;
