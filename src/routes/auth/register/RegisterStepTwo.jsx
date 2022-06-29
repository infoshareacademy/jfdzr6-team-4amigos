import React from "react";
import Error from "../../../components/error/Error";
import {
  ButtonContainer,
  ProvinceSelect,
  StyledForm,
  StyledGenderDivContainer,
  StyledSection,
  StyledSubmitButton,
  UploadFileInput,
} from "../../../components/registerForm/RegisterFormStyle";

const RegisterStepTwo = ({
  nextStep,
  handleChange,
  formData,
  errorMessage,
  prevStep,
}) => {
  const provinces = [
    "dolnośląskie",
    "kujawsko-pomorskie",
    "lubelskie",
    "lubuskie",
    "łódzkie",
    "małopolskie",
    "mazowieckie",
    "opolskie",
    "podkarpackie",
    "podlaskie",
    "pomorskie",
    "śląskie",
    "świętokrzyskie",
    "warmińsko-mazurskie",
    "zachodniopomorskie",
  ];

  const renderProvinence = provinces.map((province) => (
    <option key={province} value={province}>
      {province}
    </option>
  ));
  return (
    <StyledSection>
      <h2>Witaj! Dołącz do społeczności SportAmigos!</h2>

      <StyledForm>
        <h3>
          2. Żeby znaleźć dla Ciebie dopasowania, potrzebujemy trochę informacji
        </h3>

        <div>
          <h5>Jak masz na imię?</h5>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Twoje imię lub pseudonim"
            onChange={handleChange}
          />
        </div>
        <div>
          <h5>Gdzie mieszkasz?</h5>
          <label htmlFor="city"></label>
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="Miasto"
            onChange={handleChange}
          />
        </div>
        <div>
          <h5>Twoje województwo</h5>
          <label htmlFor="province"></label>
          <ProvinceSelect name="province" onChange={handleChange}>
            {renderProvinence}
          </ProvinceSelect>
        </div>

        <div>
          <h5>Ile masz lat?</h5>
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

        <div>
          <h5>Napisz coś o sobie:</h5>
          <label htmlFor="description"></label>
          <textarea
            name="description"
            placeholder="..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <h5>Dodaj zdjęcie profilowe</h5>
          <label htmlFor="profilePicture"></label>
          <UploadFileInput
            type="file"
            name="profilePicture"
            onChange={handleChange}
          />
        </div>
        <ButtonContainer>
          <StyledSubmitButton onClick={prevStep}>Wróć</StyledSubmitButton>
          <StyledSubmitButton onClick={nextStep}>Dalej</StyledSubmitButton>
        </ButtonContainer>
      </StyledForm>
      {errorMessage && <Error message={errorMessage} />}
    </StyledSection>
  );
};

export default RegisterStepTwo;
