import { signOut } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoOrange.png";
// styles
import {
  StyledNav,
  StyledUl,
  StyledRegister,
  StyledLogin,
  StyledLogo,
} from "./NavStyle";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const Nav = () => {
  const { role } = useContext(AuthContext);
  return (
    <StyledNav>
      <Link to="/">
        <StyledLogo src={logo} alt="Logo" />
      </Link>
      <StyledUl>
        {role === "guest" ? (
          <>
            <li>
              <p>Nie masz konta?</p>
            </li>
            <li>
              <StyledRegister to="/register">Zarejestruj się</StyledRegister>
            </li>
            <li>
              <StyledLogin to="/login">Zaloguj się</StyledLogin>
            </li>
          </>
        ) : (
          <>
            <StyledRegister to="/events">Wydarzenia</StyledRegister>

            <li>
              <StyledRegister to="/userpanel">Panel użytkownika</StyledRegister>
            </li>
            <StyledRegister to="/messages">Wiadomości</StyledRegister>
            <li onClick={() => signOut(auth)}>
              <StyledRegister to="/">Wyloguj się</StyledRegister>
            </li>
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};
