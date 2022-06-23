import { signOut } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/img/logoOrange.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

// styles
import {
  StyledNav,
  StyledUl,
  StyledRegister,
  StyledLogin,
  StyledLogo,
} from "./NavStyle";

export const Nav = ({ role }) => {
  const context = useContext(AuthContext);
  const { dispatch } = context;

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
              <StyledLogin to="/login">Zaloguj się</StyledLogin>
            </li>
            <li>
              <StyledRegister to="/register">Zarejestruj się</StyledRegister>
            </li>
          </>
        ) : (
          <>
            <StyledRegister to="/messages">Wiadomości</StyledRegister>
            <li
              onClick={() =>
                signOut(auth).then(() => {
                  dispatch({ type: "LOGOUT" });
                  if (!context) {
                    throw Error(
                      "useAuthContext must be used within a AuthProvider"
                    );
                  }
                  return context;
                })
              }
            >
              <StyledRegister to="/">Wyloguj się</StyledRegister>
            </li>
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};
