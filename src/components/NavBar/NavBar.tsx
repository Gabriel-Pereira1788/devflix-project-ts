import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { Nav, Title, List, UserIcon } from "./styles";
import PersonIcon from "@mui/icons-material/Person";
type Props = {
  setCardUserOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavBar = ({ setCardUserOn }: Props) => {
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
    </Nav>
  );
};

export default NavBar;
