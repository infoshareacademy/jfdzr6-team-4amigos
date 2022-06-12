import React from "react";
import Error from "../error/Error";
import {
  StyledInputDiv,
  StyledForm,
  StyledH3,
  StyledCheckbox,
  StyledH5,
  StyledSportsInputContainer,
  StyledSportsLabel,
  StyledInput,
  StyledGenderInputDiv,
  StyledGenderInputContainer,
  StyledTextarea,
  StyledSubmitButton,
  StyledH2,
  UploadFileInput,
} from "./RegisterFormStyle";

const RegisterForm = ({
  handleSubmit,
  handleChange,
  formData,
  errorMessage,
}) => {
  const sportsLabel = [
    { label: "Jazda na rowerze", value: "bike" },
    { label: "Spacer", value: "walk" },
    { label: "Taniec", value: "dance" },
    { label: "Jazda na rolkach", value: "rollerSkating" },
    { label: "Bieganie", value: "running" },
    { label: "Siłownia", value: "gym" },
    { label: "Wędkowanie", value: "fishing" },
    { label: "Badminton", value: "badminton" },
    { label: "Piłka nożna", value: "football" },
    { label: "Koszykówka", value: "basketball" },
  ];

  const renderSportsInput = sportsLabel.map((sportEl) => {
    return (
      <StyledInputDiv key={sportEl.value}>
        <StyledCheckbox
          type="checkbox"
          name={sportEl.value}
          value={sportEl.value}
          onChange={handleChange}
        />
        <StyledSportsLabel htmlFor="sports">{sportEl.label}</StyledSportsLabel>
      </StyledInputDiv>
    );
  });

  return (
    <div>
      <StyledH2>Witaj! Dołącz do społeczności SportAmigos!</StyledH2>

      <StyledForm onSubmit={handleSubmit}>
        <StyledH3>1. Jakie sporty Cię interesują?</StyledH3>
        <StyledH5>Wybierz tyle dyscyplin ile chcesz</StyledH5>
        <StyledSportsInputContainer>
          {renderSportsInput}
        </StyledSportsInputContainer>

        <StyledH3>
          2. Żeby znaleźć dla Ciebie dopasowania, potrzebujemy trochę informacji
        </StyledH3>

        <StyledH5>Jak masz na imię?</StyledH5>
        <div>
          <label htmlFor="name"></label>
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            placeholder="Twoje imię lub pseudonim"
            onChange={handleChange}
          />
        </div>

        <StyledH5>Ile masz lat?</StyledH5>
        <div>
          <label htmlFor="age"></label>
          <StyledInput
            type="number"
            name="age"
            value={formData.age}
            placeholder="Podaj swój wiek"
            onChange={handleChange}
          />
        </div>

        <StyledH5>Jesteś kobietą czy mężczyzną?</StyledH5>
        <StyledGenderInputContainer>
          <StyledGenderInputDiv>
            <StyledCheckbox
              type="radio"
              name="gender"
              value="man"
              checked={formData.gender === "man"}
              onChange={handleChange}
            />
            <StyledSportsLabel htmlFor="gender">Mężczyzna</StyledSportsLabel>
          </StyledGenderInputDiv>
          <StyledGenderInputDiv>
            <StyledCheckbox
              type="radio"
              name="gender"
              value="woman"
              checked={formData.gender === "woman"}
              onChange={handleChange}
            />
            <StyledSportsLabel htmlFor="gender">Kobieta</StyledSportsLabel>
          </StyledGenderInputDiv>
        </StyledGenderInputContainer>

        <StyledH5>Napisz coś o sobie:</StyledH5>
        <div>
          <label htmlFor="description"></label>
          <StyledTextarea
            name="description"
            placeholder="..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <StyledH3>3. Dane do logowania</StyledH3>
        <StyledH5>Twój adres e-mail</StyledH5>
        {errorMessage && <Error message={errorMessage} />}
        <div>
          <label htmlFor="email"></label>
          <StyledInput
            type="text"
            name="email"
            value={formData.email}
            placeholder="Wprowadź adres e-mail"
            onChange={handleChange}
          />
        </div>

        <StyledH5>Stwórz hasło</StyledH5>
        <div>
          <label htmlFor="password"></label>
          <StyledInput
            type="password"
            name="password"
            value={formData.password}
            placeholder="Stwórz nowe hasło"
            onChange={handleChange}
          />
        </div>

        <StyledH5>Potwierdź hasło</StyledH5>
        <div>
          <label htmlFor="confirmPassword"></label>
          <StyledInput
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Potwierdź swoje hasło"
            onChange={handleChange}
          />
        </div>

        <StyledH5>Dodaj zdjęcie profilowe</StyledH5>
        <div>
          <label htmlFor="profilePicture"></label>
          <UploadFileInput
            type="file"
            name="profilePicture"
            onChange={handleChange}
          />
        </div>

        <StyledSubmitButton type="submit">
          Zarejestruj się i poznaj swoje dopasowania
        </StyledSubmitButton>
      </StyledForm>
    </div>
  );
};

export default RegisterForm;
