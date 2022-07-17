import { NavLink } from "react-router-dom";
import { Nav, Title, List } from "./styles";
type Props = {};

const NavBar = (props: Props) => {
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
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
      </List>
    </Nav>
  );
};

export default NavBar;
