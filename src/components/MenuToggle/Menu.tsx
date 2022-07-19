import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { MenuNav, List } from "./styles";
type Props = {
  setMenuToggleOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const Menu = ({ setMenuToggleOn }: Props) => {
  const { user } = useAuthContext();
  return (
    <MenuNav>
      <List>
        <li>
          <button onClick={() => setMenuToggleOn(false)}>X</button>
        </li>
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
    </MenuNav>
  );
};

export default Menu;
