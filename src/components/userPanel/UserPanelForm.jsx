import React from "react";
import Error from "../error/Error";
import {
  StyledSportsDiv,
  StyledForm,
  StyledSection,
  StyledSportsDivContainer,
  StyledSubmitButton,
  StyledGenderDivContainer,
} from "./UserPanelFormStyle";

const UserPanelForm = ({
  handleChange,
  formData,
  errorMessage,
  handleSubmit,
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
      <h2>Panel Użytkownika</h2>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <h5>Twoje imię lub pseudonim</h5>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
        </div>
        <h5>Ile masz lat?</h5>
        <div>
          <label htmlFor="age"></label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <h5>Twoje miasto</h5>
        <div>
          <label htmlFor="city"></label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <h5>Napisz coś o sobie:</h5>
        <div>
          <label htmlFor="description"></label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <h5>Jakie sporty Cię interesują?</h5>
        <StyledSportsDivContainer>{renderSportsInput}</StyledSportsDivContainer>
        <StyledSubmitButton type="submit">Zapisz</StyledSubmitButton>
      </StyledForm>
      {errorMessage && <Error message={errorMessage} />}
    </StyledSection>
  );
};

export default UserPanelForm;
