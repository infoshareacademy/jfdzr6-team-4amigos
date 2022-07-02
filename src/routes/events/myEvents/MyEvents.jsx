import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getEvents, registerListenerMyEvents } from "../../../api/events";
import EventsNav from "../../../components/nav/EventsNav";
import { AuthContext } from "../../../context/Auth";
import EventElement from "../eventElement/EventElement";
import {
  Container,
  EventsContainer,
  EventsListContainer,
  StyledContainer,
} from "../EventsStyle";
import { StyledMyEventsList } from "./MyEventsStyle";

const MyEvents = () => {
  const { userData } = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState(null);

  useEffect(() => {
    registerListenerMyEvents(userData.id, (querySnapshot) => {
      setMyEvents(getEvents(querySnapshot));
    });
  }, [userData.id]);

  if (!myEvents) {
    return <h2>Trwa ładowanie strony</h2>;
  }

  const renderMyEvents = myEvents.map((event) => {
    return <EventElement event={event} key={event.id} />;
  });
  return (
    <Container>
      <EventsNav />
      <EventsListContainer>
        <h1>Moje wydarzenia</h1>
        <EventsContainer>{renderMyEvents}</EventsContainer>
      </EventsListContainer>
    </Container>
  );
};

export default MyEvents;
