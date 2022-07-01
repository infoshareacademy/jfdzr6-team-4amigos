import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEvent, getEvent, updateEvent } from "../../../api/events";
import Comments from "../../../components/comments/Comments";
import { AuthContext } from "../../../context/Auth";
import EditEventElement from "../eventElement/EditEventElement";
import { StyledBtn, StyledEventDetail } from "./EventDetailStyle";

const EventDetail = () => {
  const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [draftId, setDraftId] = useState(null);
  const navigate = useNavigate();

  const enterEditMode = (id) => {
    setDraftId(id);
  };

  const cancelEditMode = () => {
    setDraftId(null);
  };

  useEffect(() => {
    getEvent(id, (docEvent) => {
      setEventData({ id: docEvent.id, ...docEvent.data() });
    });
  }, [id]);

  const handleClick = () => {
    setIsPending(true);
    if (eventData.members.includes(userData.id)) {
      setError("Uzytkownik dołączył juz do wydarzenia");
      setIsPending(false);
      return;
    }
    updateEvent(id, { members: [...eventData.members, userData.id] })
      .then(() => {
        setIsPending(false);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error);
      });
  };

  const leaveEvent = (id) => {
    updateEvent(eventData.id, {
      members: eventData.members.filter((memberId) => memberId !== id),
    });
  };

  const deleteEventById = (id) => {
    deleteEvent(id);
    navigate("/events", { replace: true });
  };

  if (!eventData) {
    return <h2>Trwa ładowanie strony...</h2>;
  }

  const renderJoinButton = () => {
    if (eventData.idAdmin === userData.id) {
      return;
    } else if (eventData.members.includes(userData.id)) {
      return (
        <StyledBtn onClick={() => leaveEvent(userData.id)} disabled={isPending}>
          Zrezygnuj
        </StyledBtn>
      );
    }
    return (
      <StyledBtn onClick={handleClick} disabled={isPending}>
        {isPending ? "Dołączam..." : "Dołącz"}
      </StyledBtn>
    );
  };

  const renderEvent =
    eventData.id === draftId ? (
      <EditEventElement event={eventData} cancelEditMode={cancelEditMode} />
    ) : (
      <div>
        <h2>{eventData.title}</h2>
        <p>Data: {eventData.startDate}</p>
        <p>Godzina: {eventData.startTime}</p>
        <p>Miasto: {eventData.city}</p>
        <p>Sport: {eventData.category}</p>
        <p>Opis :{eventData.description}</p>
        {renderJoinButton()}
        {userData.id === eventData.idAdmin && (
          <StyledBtn onClick={() => deleteEventById(eventData.id)}>
            Usuń
          </StyledBtn>
        )}
        {userData.id === eventData.idAdmin && (
          <StyledBtn onClick={() => enterEditMode(eventData.id)}>
            Edytuj
          </StyledBtn>
        )}
      </div>
    );

  return (
    <StyledEventDetail>
      {error && <h2>{error}</h2>}
      {!eventData && <h2>Trwa ładowanie strony</h2>}
      {renderEvent}
      <Comments
        uid={userData.id}
        userName={userData.name}
        eventId={id}
        eventData={eventData}
      />
    </StyledEventDetail>
  );
};

export default EventDetail;
