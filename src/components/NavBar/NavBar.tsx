import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Nav, Title, List, UserIcon, Toggle } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
type Props = {
  setCardUserOn: React.Dispatch<React.SetStateAction<boolean>>;
  setMenuToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setCardUserOn, setMenuToggleOn }: Props) => {
  const { user } = useAuthContext();
  return (
    <Nav>
      <Title>
        <NavLink to="/">DEVFLIX</NavLink>
      </Title>

      <List>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/series">Series</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/favorites">Favoritos</NavLink>
            </li>
            <UserIcon onClick={() => setCardUserOn(true)}>
              <span>{user.displayName}</span>
              <PersonIcon />
            </UserIcon>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
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
