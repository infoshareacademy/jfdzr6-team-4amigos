import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { addEvent } from "../../api/events";
import AddEventForm from "../../components/eventsForm/AddEventForm";
import { AuthContext } from "../../context/Auth";

const AddEvent = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    addEvent({ ...data, members: [], idAdmin: userData.id });

    navigate("/events");
  };

  return <AddEventForm onSubmit={onSubmit} />;
};

export default AddEvent;
