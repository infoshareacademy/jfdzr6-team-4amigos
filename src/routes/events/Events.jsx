import React from "react";
import { Link } from "react-router-dom";
import EventsList from "./EventsList";
import { Container, EventsListContainer, StyledContainer } from "./EventsStyle";

const Events = () => {
  return (
    <Container>
      <StyledContainer>
        <ul>
          <li>
            <Link to="/events">Wydarzenia</Link>
          </li>
          <li>
            <Link to="my-events">Moje wydarzenia</Link>
          </li>
          <li>
            <Link to="add-events">Dodaj wydarzenie</Link>
          </li>
        </ul>
      </StyledContainer>
      <EventsListContainer>
        <EventsList />
      </EventsListContainer>
    </Container>
  );
};

export default Events;
