import React, { useContext, useEffect, useState } from "react";
import { displayEvents } from "../../api/events";
import { AuthContext } from "../../context/Auth";
import EventElement from "./eventElement/EventElement";

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

  return <div>{renderEvents}</div>;
};

export default EventsList;
