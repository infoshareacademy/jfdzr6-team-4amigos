import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logoSportAmigo.png";
// styles
import { StyledSection } from "./LandingStyle";

const Landing = () => {
  return (
    <div>
      <StyledSection>
        <h1>Witaj!</h1>
        <p>Dołącz do świata sportowych Amigos!</p>
        <div>
          <img src={logo} alt="SportAmigos" />
        </div>
        <Link to="/register">
          <button>Znajdź swojego Sport Amigo!</button>
        </Link>
        <p>Kliknij i dowiedz się więcej!</p>
      </StyledSection>
    </div>
  );
};

export default Landing;
