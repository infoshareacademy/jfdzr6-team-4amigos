import React from "react";
import { Link } from "react-router-dom";
import { sportsIcon } from "../../../utils/sportsLabel";
import { CardContainer, DateWrapper, Icon, InfoWrapper } from "../EventsStyle";
import { FcOvertime, FcConferenceCall } from "react-icons/fc";

const EventElement = ({ event }) => {
  const { id, title, city, startDate, description, category, members } = event;

  const date = startDate.split("-").reverse().join(".");

  const displayMembersCount = () => {
    let step = 0;
    if (members.length === 1) {
      step = 1;
    } else if (members.length >= 2) {
      step = 2;
    } else {
      step = 3;
    }
    switch (step) {
      case 1:
        return `${members.length} osoba weźmie udział`;
        break;
      case 2:
        return `${members.length} osoby weźmie udział`;
        break;
      case 3:
        return `${members.length} osób weźmie udział`;
        break;

      default:
        break;
    }
  };
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
          {displayMembersCount()}
        </span>
      </InfoWrapper>

      <Link to={`/events/${id}`}>Wyświetl szczegóły</Link>
    </CardContainer>
  );
};

export default EventElement;
