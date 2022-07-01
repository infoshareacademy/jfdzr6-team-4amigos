import React from "react";
import Error from "../../../components/error/Error";
import {
  ButtonContainer,
  StyledForm,
  StyledSection,
  StyledSubmitButton,
} from "../../../components/registerForm/RegisterFormStyle";

const RegisterStepThree = ({
  handleSubmit,
  handleChange,
  formData,
  errorMessage,
  prevStep,
}) => {
  return (
    <StyledSection>
      <h2>Witaj! Dołącz do społeczności SportAmigos!</h2>

      <StyledForm>
        <h3>3. Dane do logowania</h3>
        {errorMessage && <Error message={errorMessage} />}
        <div>
          <h5>Twój adres e-mail</h5>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Wprowadź adres e-mail"
            onChange={handleChange}
          />
        </div>

        <div>
          <h5>Stwórz hasło</h5>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Stwórz nowe hasło"
            onChange={handleChange}
            autoComplete="false"
          />
        </div>

        <div>
          <h5>Potwierdź hasło</h5>
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Potwierdź swoje hasło"
            onChange={handleChange}
            autoComplete="false"
          />
        </div>

        <ButtonContainer>
          <StyledSubmitButton onClick={prevStep}>Wróć</StyledSubmitButton>
          <StyledSubmitButton onClick={handleSubmit}>
            Zarejestruj
          </StyledSubmitButton>
        </ButtonContainer>
      </StyledForm>
    </StyledSection>
  );
};

export default RegisterStepThree;
