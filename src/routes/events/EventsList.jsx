import React, { useEffect, useState } from 'react'
import { displayEvents } from '../../api/events'

const EventsList = () => {
    const [events, setEvents] = useState(null)

    useEffect(() => {
        displayEvents("bike", querySnapshot => {
            setEvents(querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }))
        })
    }, [])

    if (!events) {
        return <p>Trwa ładowanie strony...</p>
    }

    const renderEvents = events.map(({ id, title, city, startDate, description, category }) => {
        return <div style={{ border: "1px solid tomato" }}>
            <h2 key={id}>{title}</h2>
            <p>{city}</p>
            <p>{startDate}</p>
            <p>{category}</p>
            <p>{description}</p>
        </div>
    })

    return <div>{renderEvents}</div>
}

export default EventsList