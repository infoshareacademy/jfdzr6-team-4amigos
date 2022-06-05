import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "../../components/nav/Nav";
import logo from "../../assets/logoSportAmigo.png";

// styles
import { StyledSection } from "./LandingStyle";

const Landing = () => {
  return (
    <div>
      <Nav />
      <StyledSection>
        <h1>Witaj!</h1>
        <p>Dołącz do świata sportowych Amigos!</p>
        <img src={logo} alt="SportAmigos" />
        <Link to="/register">
          <button>Znajdź swojego Sport Amigo!</button>
        </Link>
      </StyledSection>
    </div>
  );
};

export default Landing;
