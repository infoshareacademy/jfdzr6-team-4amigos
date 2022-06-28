import React from "react";
import { Link } from "react-router-dom";

const EventElement = ({ event }) => {
  const { id, title, city, startDate, description, category } = event;
  return (
    <Link to={`/events/${id}`}>
      <h2 key={id}>{title}</h2>
      <p>Miejsce: {city}</p>
      <p>Data: {startDate}</p>
      <p>Sport: {category}</p>
      <p>Opis: {description}</p>
      <p>Kliknij by wziąć udział!</p>
    </Link>
  );
};

export default EventElement;
