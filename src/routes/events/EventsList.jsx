import React, { useContext, useEffect, useState } from 'react'
import { displayEvents } from '../../api/events'
import { AuthContext } from '../../context/Auth';
import EditEventElement from './eventElement/EditEventElement';
import EventElement from './eventElement/EventElement';

const EventsList = () => {
    const { userData } = useContext(AuthContext);
    const [events, setEvents] = useState(null)
    const [draftId, setDraftId] = useState(null)

    const enterEditMode = (id) => {
        setDraftId(id)
    }

    const cancelEditMode = () => {
        setDraftId(null)
    }

    useEffect(() => {
        displayEvents(userData.sports, querySnapshot => {
            setEvents(querySnapshot.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            }))
        })
    }, [])

    if (!events) {
        return <p>Trwa ładowanie strony...</p>
    }

    const renderEvents = events.map((event) => {
        return event.id === draftId ? <EditEventElement event={event} cancelEditMode={cancelEditMode} /> : <EventElement event={event} uid={userData?.id} enterEditMode={enterEditMode} />
    })

    return <div>{renderEvents}</div>
}

export default EventsList