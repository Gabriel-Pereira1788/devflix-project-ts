import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Nav, Title, List, Toggle } from "./styles";
import { User } from "../../GlobalStyles";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
type Props = {
  setModalUserOn: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setModalUserOn, setMenuToggleOn }: Props) => {
  const { user } = useAuthContext();
  return (
    <Nav>
      <Title>
        <NavLink to="/">DEVFLIX</NavLink>
      </Title>

      <List>
        <li>
          <NavLink to="/">Filmes</NavLink>
        </li>
        <li>
          <NavLink to="/series">Series</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        {user ? (
          <>
            <User onClick={() => setModalUserOn(true)}>
              <span>{user.displayName}</span>
              <PersonIcon />
            </User>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register">Registrar-se</NavLink>
            </li>
          </>
        )}
      </List>
      <Toggle onClick={() => setMenuToggleOn(true)}>
        <MenuIcon />
      </Toggle>
    </Nav>
  );
};

export default NavBar;
