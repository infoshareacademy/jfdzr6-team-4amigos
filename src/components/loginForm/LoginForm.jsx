import React from "react";
import { Link } from "react-router-dom";

// styles
import { StyledLoginForm, StyledSection, StyledLink } from "./LoginFormStyle";

const LoginForm = ({ handleLogin }) => {
  return (
    <StyledSection>
      <h1>Witaj ponownie!</h1>
      <StyledLoginForm onSubmit={handleLogin}>
          <label htmlFor="email">
            <p>Email</p>
            <input type="email" name="email" placeholder="Wpisz swój adres email" />
          </label>
          <label htmlFor="password">
            <p>Hasło</p>
          <input type="password" name="password" placeholder="Wpisz swoje hasło" />
          </label>
          
        <button type="submit">Zaloguj</button>
        <StyledLink to="/forgot-password">Nie pamiętasz hasła?</StyledLink>
      </StyledLoginForm>
    </StyledSection>
  );
};

export default LoginForm;
