import React from "react";
import EventsNav from "../../components/nav/EventsNav";
import EventsList from "./EventsList";
import { Container, EventsListContainer } from "./EventsStyle";

const Events = () => {
  return (
    <Container>
      <EventsNav />
      <EventsListContainer>
        <EventsList />
      </EventsListContainer>
    </Container>
  );
};

export default Events;
