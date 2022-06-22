import React, { useState } from "react";
const UserPanelForm = ({ handleChange, formData, error, handleSubmit }) => {
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
      <div key={sportEl.value}>
        <input
          type="checkbox"
          name={sportEl.value}
          value={sportEl.value}
          onChange={handleChange}
        />
        <label htmlFor="sports">{sportEl.label}</label>
      </div>
    );
  });

  return (
    <div>
      <h1>User Panel</h1>
      <form onSubmit={handleSubmit}>
        <p>Twoje imię lub pseudonim</p>
        <label htmlFor="name"></label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Twoje imię lub pseudonim"
          onChange={handleChange}
        ></input>

        <p>Jesteś kobietą czy mężczyzną?</p>
        <label htmlFor="gender">Kobieta</label>
        <input
          type="radio"
          name="gender"
          value="woman"
          checked={formData.gender === "woman"}
          onChange={handleChange}
        />

        <label htmlFor="gender">Mężczyzna</label>
        <input
          type="radio"
          name="gender"
          value="man"
          checked={formData.gender === "man"}
          onChange={handleChange}
        />
        <p>Ile masz lat?</p>
        <div>
          <label htmlFor="age"></label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Podaj swój wiek"
            onChange={handleChange}
          />
        </div>

        <p>Twoje miasto</p>
        <div>
          <label htmlFor="city"></label>
          <input
            type="text"
            name="city"
            value={formData.city}
            placeholder="Wpisz swoje miasto"
            onChange={handleChange}
          />
        </div>
        <p>Napisz coś o sobie:</p>
        <div>
          <label htmlFor="description"></label>
          <input
            type="textarea"
            name="description"
            placeholder="..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <p>Jakie sporty Cię interesują?</p>

        <div>{renderSportsInput}</div>

        <button type="submit">Zapisz</button>
      </form>
    </div>
  );
};

export default UserPanelForm;
