import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { MenuNav, List, User, Button } from "./styles";
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
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setMenuToggleOn(false)}>
            Sobre
          </NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/favorites" onClick={() => setMenuToggleOn(false)}>
                Favoritos
              </NavLink>
            </li>
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
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={() => setMenuToggleOn(false)}>
                Register
              </NavLink>
            </li>
          </>
        )}
      </List>
    </MenuNav>
  );
};

export default Menu;
