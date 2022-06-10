import { Link } from "react-router-dom";
import logo from "../../assets/img/logoOrange.png";


// styles
import { StyledNav, StyledUl, StyledRegister, StyledLogin, StyledLogo } from "./NavStyle";

export const Nav = () => {
  return (
    <StyledNav>
      <Link to="/">
          <StyledLogo src={logo} alt="Logo" />
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
