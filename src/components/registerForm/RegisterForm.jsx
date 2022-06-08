import React from "react";

const RegisterForm = ({ handleSubmit, handleChange, formData }) => {
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
        <label htmlFor="sports">{sportEl.label}</label>
        <input
          type="checkbox"
          name={sportEl.value}
          value={sportEl.value}
          onChange={handleChange}
        />
      </div>
    );
  });

  return (
    <form onSubmit={handleSubmit}>
      <div style={{border:"1px solid black"}}>
        <h3>Wybierz jakie sporty uprawiasz</h3>
        {renderSportsInput}
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="profilePicture">Zdjęcie profilowe:</label>
        <input
          type="file"
          name="profilePicture"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          placeholder="Enter your age"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Mężczyzna</label>
        <input
          type="radio"
          name="gender"
          value="man"
          checked={formData.gender === "man"}
          onChange={handleChange}
        />
        <label htmlFor="gender">Kobieta</label>
        <input
          type="radio"
          name="gender"
          value="woman"
          checked={formData.gender === "woman"}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Napisz coś o sobie:</label>
        <textarea
          name="description"
          value={formData.description}
          placeholder="Napisz coś o sobie"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confrim your password"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Zarejestruj się</button>
    </form>
  );
};

export default RegisterForm;
