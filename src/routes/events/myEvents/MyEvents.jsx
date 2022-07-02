import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { getEvents, registerListenerMyEvents } from "../../../api/events";
import { AuthContext } from "../../../context/Auth";
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

  const renderMyEvents = myEvents.map(
    ({ id, title, category, city, description, startTime, startDate }) => {
      return (
        <Link to={`/events/${id}`} key={id}>
          <p>Sport: {category}</p>
          <h2>{title}</h2>
          <p>Miasto: {city}</p>
          <p>Opis: {description}</p>
          <p>Data: {startDate}</p>
          <p>Godzina: {startTime}</p>
        </Link>
      );
    }
  );
  return (
    <StyledMyEventsList>
      <h1>Moje Wydarzenia</h1>
      {renderMyEvents}
    </StyledMyEventsList>
  );
};

export default MyEvents;
