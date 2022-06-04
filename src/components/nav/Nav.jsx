import { Link } from "react-router-dom";


// styles
import { StyledNav } from "./NavStyle";
import { StyledUl } from "./NavStyle";
import { StyledRegister } from "./NavStyle";
import { StyledLogin } from "./NavStyle";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
          <img src="../../assets/LogoOrange.png" alt="Logo" />
      </Link>
      <StyledUl>
        <li>
          <p>Nie masz konta?</p>
        </li>
        <li>
          <StyledRegister to="/register">Zarejestruj się</StyledRegister>
        </li>
        <li>
          <StyledLogin to="/login">Zaloguj się</StyledLogin>
        </li>
      </StyledUl>
    </StyledNav>
  );
};
