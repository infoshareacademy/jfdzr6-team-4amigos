import { signOut } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoOrange.png";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Avatar } from "../../routes/messages/MessagesStyle";

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


export const Nav = ({ role }) => {
  const { userData,role } = useContext(AuthContext);

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
            <li>
              <StyledRegister to="/events">Wydarzenia</StyledRegister>
            </li>
            {/* <li>
              <StyledRegister to="/userpanel">Panel użytkownika</StyledRegister>
            </li> */}
            <li>
              <StyledRegister to="/messages">Wiadomości</StyledRegister>
            </li>
            <li onClick={() => signOut(auth)}>
              <StyledRegister to="/">Wyloguj się</StyledRegister>
            </li>
            <li>
              <Link to="/userpanel">
                <Avatar>
                  <img src={userData.profilePicture} alt={userData.name} />
                </Avatar>
              </Link>
            </li>
          </>
        )}
      </StyledUl>
    </StyledNav>
  );
};
