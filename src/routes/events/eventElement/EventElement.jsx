import React from 'react'
import { deleteEvent } from '../../../api/events'

const EventElement = ({ event, uid, enterEditMode }) => {
    const { id, title, city, startDate, description, category, idAdmin } = event
    return (
        <div style={{ border: "1px solid tomato" }} key={id}>
            <h2 key={id}>{title}</h2>
            <p>{city}</p>
            <p>{startDate}</p>
            <p>{category}</p>
            <p>{description}</p>
            {uid === idAdmin && <button onClick={() => deleteEvent(id)}>Usuń</button>}
            {uid === idAdmin && <button onClick={() => enterEditMode(id)}>Edytuj</button>}
        </div>
    )
}

export default EventElement