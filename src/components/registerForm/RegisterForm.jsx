import React from "react";
import Error from "../error/Error";
import {
  StyledSportsDiv,
  StyledForm,
  StyledSection,
  StyledSportsDivContainer,
  StyledSubmitButton,
  StyledGenderDivContainer,
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
    { label: "Jazda na rolkach", value: "rollerSkating" },
    { label: "Bieganie", value: "running" },
    { label: "Siłownia", value: "gym" },
    { label: "Wędkowanie", value: "fishing" },
    { label: "Tenis", value: "tennis" },
    { label: "Nordic Walking", value: "nordicWalking" },
  ];

  const renderSportsInput = sportsLabel.map((sportEl) => {
    return (
      <StyledSportsDiv key={sportEl.value}>
        <input
          type="checkbox"
          name={sportEl.value}
          value={sportEl.value}
          onChange={handleChange}
        />
        <label htmlFor="sports">{sportEl.label}</label>
      </StyledSportsDiv>
    );
  });

  return (
    <StyledSection>
      <h2>Witaj! Dołącz do społeczności SportAmigos!</h2>

      <StyledForm onSubmit={handleSubmit}>
        <h3>1. Jakie sporty Cię interesują?</h3>
        <h5>Wybierz tyle dyscyplin ile chcesz</h5>
        <StyledSportsDivContainer>{renderSportsInput}</StyledSportsDivContainer>

        <h3>
          2. Żeby znaleźć dla Ciebie dopasowania, potrzebujemy trochę informacji
        </h3>

        <h5>Jak masz na imię?</h5>
        <div>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Twoje imię lub pseudonim"
            onChange={handleChange}
          />
        </div>
        <h5>Gdzie mieszkasz?</h5>
        <div>
          <label htmlFor="city"></label>
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="Miasto"
            onChange={handleChange}
          />
        </div>
        <h5>Twoje województwo</h5>
        <div></div>

        <h5>Ile masz lat?</h5>
        <div>
          <label htmlFor="age"></label>
          <input
            type="number"
            name="age"
            min={0}
            value={formData.age}
            placeholder="Podaj swój wiek"
            onChange={handleChange}
          />
        </div>

        <h5>Jesteś kobietą czy mężczyzną?</h5>
        <StyledGenderDivContainer>
          <div>
            <input
              type="radio"
              name="gender"
              value="man"
              checked={formData.gender === "man"}
              onChange={handleChange}
            />
            <label htmlFor="gender">Mężczyzna</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="woman"
              checked={formData.gender === "woman"}
              onChange={handleChange}
            />
            <label htmlFor="gender">Kobieta</label>
          </div>
        </StyledGenderDivContainer>

        <h5>Napisz coś o sobie:</h5>
        <div>
          <label htmlFor="description"></label>
          <textarea
            name="description"
            placeholder="..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <h3>3. Dane do logowania</h3>
        <h5>Twój adres e-mail</h5>
        <p> {errorMessage && <Error message={errorMessage} />}</p>
        <div>
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            value={formData.email}
            placeholder="Wprowadź adres e-mail"
            onChange={handleChange}
          />
        </div>

        <h5>Stwórz hasło</h5>
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Stwórz nowe hasło"
            onChange={handleChange}
          />
        </div>

        <h5>Potwierdź hasło</h5>
        <div>
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Potwierdź swoje hasło"
            onChange={handleChange}
          />
        </div>

        <h5>Dodaj zdjęcie profilowe</h5>
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
    </StyledSection>
  );
};

export default RegisterForm;
