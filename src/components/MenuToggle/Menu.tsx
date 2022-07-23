import { NavLink } from "react-router-dom";
//context
import { useAuthContext } from "../../contexts/AuthContext";
//styles
import { MenuNav, List, Button } from "./styles";
import { User } from "../../GlobalStyles";
//icons
import PersonIcon from "@mui/icons-material/Person";
import { useAuthentication } from "../../hooks/useAuthentication";
type Props = {
  setMenuToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
};
const Menu = ({ setMenuToggleOn }: Props) => {
  const { user } = useAuthContext();
  const { signOutAccount } = useAuthentication();

  const handleSignOut = () => {
    signOutAccount();
    setMenuToggleOn(false);
  };
  return (
    <MenuNav>
      <List>
        <li>
          <Button onClick={() => setMenuToggleOn(false)}>X</Button>
        </li>
        <li>
          <NavLink to="/" onClick={() => setMenuToggleOn(false)}>
            Filmes
          </NavLink>
        </li>
        <li>
          <NavLink to="/series" onClick={() => setMenuToggleOn(false)}>
            Series
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuToggleOn(false)}>
            Sobre
          </NavLink>
        </li>
        {user ? (
          <>
            <User>
              <span>{user.displayName}</span>
              <PersonIcon />
            </User>
            <li>
              <Button onClick={handleSignOut}>Sair</Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login" onClick={() => setMenuToggleOn(false)}>
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={() => setMenuToggleOn(false)}>
                Registrar-se
              </NavLink>
            </li>
          </>
        )}
      </List>
    </MenuNav>
  );
};

export default Menu;
