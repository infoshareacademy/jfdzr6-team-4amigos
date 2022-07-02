import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { addEvent } from "../../api/events";
import AddEventForm from "../../components/eventsForm/AddEventForm";
import EventsNav from "../../components/nav/EventsNav";
import { AuthContext } from "../../context/Auth";
import { Container, EventsListContainer, StyledContainer } from "./EventsStyle";

const AddEvent = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const ref = await addEvent({
      ...data,
      members: [userData.id],
      idAdmin: userData.id,
      comments: null,
    });
    navigate(`/events/${ref.id}`);
  };

  return (
    <Container>
      <EventsNav />
      <EventsListContainer>
        <AddEventForm onSubmit={onSubmit} />
      </EventsListContainer>
    </Container>
  );
};

export default AddEvent;
