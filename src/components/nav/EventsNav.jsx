import React from "react";
import { Link } from "react-router-dom";
import { StyledContainer, StyledLink } from "../../routes/events/EventsStyle";

const EventsNav = () => {
  return (
    <StyledContainer>
      <h4>
        <Link to="/events">Wydarzenia</Link>
      </h4>
      <ul>
        <li>
          <StyledLink to="/events/my-events">Moje wydarzenia</StyledLink>
        </li>
        <li>
          <StyledLink to="/events/add-events">Dodaj wydarzenie</StyledLink>
        </li>
      </ul>
    </StyledContainer>
  );
};

export default EventsNav;
