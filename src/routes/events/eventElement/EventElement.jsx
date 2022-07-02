import React from "react";
import { Link } from "react-router-dom";
import { sportsIcon } from "../../../utils/sportsLabel";
import { CardContainer, DateWrapper, Icon, InfoWrapper } from "../EventsStyle";
import { FcOvertime, FcConferenceCall } from "react-icons/fc";

const EventElement = ({ event }) => {
  const { id, title, city, startDate, description, category, members } = event;

  const date = startDate.split("-").reverse().join(".");
  return (
    <CardContainer>
      <Icon>{sportsIcon[category]}</Icon>
      <h2>{title}</h2>

      <DateWrapper>
        <FcOvertime />
        <span>{city},</span>
        <span>{date}</span>
      </DateWrapper>
      <InfoWrapper>
        <p>{description}</p>
        <span>
          <FcConferenceCall />
          {members.length} osób weźmie udział
        </span>
      </InfoWrapper>

      <Link to={`/events/${id}`}>Wyświetl szczegóły</Link>
    </CardContainer>
  );
};

export default EventElement;
