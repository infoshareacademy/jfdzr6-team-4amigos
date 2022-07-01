import React from "react";
import Error from "../../../components/error/Error";
import {
  StyledForm,
  StyledSection,
  StyledSportsDiv,
  StyledSportsDivContainer,
  StyledSubmitButton,
} from "../../../components/registerForm/RegisterFormStyle";

const RegisterFirstStep = ({ nextStep, handleChange, errorMessage }) => {
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
    <div>
      <StyledSection>
        <h2>Witaj! Dołącz do społeczności SportAmigos!</h2>

        <StyledForm>
          <h3>1. Jakie sporty Cię interesują?</h3>
          <h5>Wybierz tyle dyscyplin ile chcesz</h5>
          <StyledSportsDivContainer>
            {renderSportsInput}
          </StyledSportsDivContainer>
          <StyledSubmitButton onClick={nextStep}>Dalej</StyledSubmitButton>
        </StyledForm>
        {errorMessage && <Error message={errorMessage} />}
      </StyledSection>
    </div>
  );
};

export default RegisterFirstStep;
