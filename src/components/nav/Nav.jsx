import { signOut } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoOrange.png";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Avatar } from "../../routes/messages/MessagesStyle";
import defaultPicture from "../../assets/img/defaultPicture.png";

// styles
import {
  StyledNav,
  StyledUl,
  StyledRegister,
  StyledLogin,
  StyledLogo,
} from "./NavStyle";

export const Nav = () => {
  const { userData, role } = useContext(AuthContext);

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
              <StyledRegister to="/login">Zaloguj się</StyledRegister>
            </li>
          </>
        ) : (
          <>
            <li>
              <StyledRegister to="/events">Wydarzenia</StyledRegister>
            </li>
            <li>
              <StyledRegister to="/messages">Wiadomości</StyledRegister>
            </li>
            <li onClick={() => signOut(auth)}>
              <StyledRegister to="/">Wyloguj się</StyledRegister>
            </li>
            <li>
              <Link to="/userpanel">
                <Avatar>
                  <img
                    src={userData.profilePicture || defaultPicture}
                    alt={userData.name}
                  />
                </Avatar>
              </Link>
            </li>
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};
