import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { addEvent } from "../../api/events";
import AddEventForm from "../../components/eventsForm/AddEventForm";
import { AuthContext } from "../../context/Auth";
import EventsList from "./EventsList";
import { StyledContainer } from "./EventsStyle";

const Events = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div style={{ display: "flex" }}>
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
      <div>
        <EventsList />
      </div>
    </div>
  );
};

export default Events;
