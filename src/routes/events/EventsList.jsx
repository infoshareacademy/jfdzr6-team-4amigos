import React, { useContext, useEffect, useState } from "react";
import { displayEvents } from "../../api/events";
import { AuthContext } from "../../context/Auth";
import EventElement from "./eventElement/EventElement";
import { StyledEventsList } from "./EventsListStyle";
import { EventsContainer } from "./EventsStyle";

const EventsList = () => {
  const { userData } = useContext(AuthContext);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    displayEvents(userData.sports, (querySnapshot) => {
      setEvents(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [userData.sports]);

  if (!events) {
    return <p>Trwa ładowanie strony...</p>;
  }

  const renderEvents = events.map((event) => {
    return <EventElement event={event} uid={userData?.id} key={event.id} />;
  });

  return (
    <>
      <h1>Lista wydarzeń</h1>
      <EventsContainer>{renderEvents}</EventsContainer>
    </>
  );
};

export default EventsList;
