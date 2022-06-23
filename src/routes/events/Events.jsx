import React, { useContext } from 'react'
import { addEvent } from '../../api/events';
import AddEventForm from '../../components/form/eventsForm/AddEventForm';
import { AuthContext } from '../../context/Auth';
import EventsList from './EventsList';

const Events = ({ uid }) => {
    const { userData } = useContext(AuthContext);
    const onSubmit = data => {
        addEvent({ ...data, members: [], idAdmin: userData.id })
    }
    return (
        <div>
            <button>Dodaj wydarzenie</button>
            <AddEventForm onSubmit={onSubmit} />
            <EventsList uid={uid} />
        </div>
    )
}

export default Events