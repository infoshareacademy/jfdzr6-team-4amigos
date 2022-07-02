import { StyledUl } from "./NavStyle";
import { StyledRegister } from "./NavStyle";
import { Link } from "react-router-dom";
import defaultPicture from "../../assets/img/defaultPicture.png";
import { Avatar } from "../../routes/messages/MessagesStyle";
import { signOut } from "@firebase/auth";
import { auth } from "../../api/firebase";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

export const NavLinks = () => {
  const { userData, role } = useContext(AuthContext);

  return (
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
  );
};
