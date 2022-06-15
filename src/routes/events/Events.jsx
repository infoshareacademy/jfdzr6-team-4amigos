import React from 'react'
import { addEvent } from '../../api/events';
import AddEventForm from '../../components/form/eventsForm/AddEventForm';
import EventsList from './EventsList';

const Events = ({ uid }) => {

    const onSubmit = data => {
        console.log({ ...data, members: [] })
        addEvent({ ...data, members: [], idAdmin: uid })
    }
    return (
        <div>
            <button>Dodaj wydarzenie</button>
            <AddEventForm onSubmit={onSubmit} />
            <EventsList />
        </div>
    )
}

export default Events