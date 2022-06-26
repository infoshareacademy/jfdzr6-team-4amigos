import React from 'react'
import { Link } from 'react-router-dom'

const EventElement = ({ event }) => {
    const { id, title, city, startDate, description, category } = event
    return (
        <Link to={`/events/${id}`} style={{ border: "1px solid tomato" }}>
            <h2 key={id}>{title}</h2>
            <p>{city}</p>
            <p>{startDate}</p>
            <p>{category}</p>
            <p>{description}</p>
        </Link>
    )
}

export default EventElement