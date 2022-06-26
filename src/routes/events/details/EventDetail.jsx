import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getEvent } from '../../../api/events'

const EventDetail = () => {
    const {id} = useParams()
    const [eventData, setEventData] = useState(null)

    useEffect( ()=>{
        getEvent(id, docEvent=>{
            setEventData({id:docEvent.id, ...docEvent.data()})
        })
    },[])

    // if (!eventData) {
    //     return <h2>Trwa ładowanie strony</h2>
    // }


  return (
    <div>
        {!eventData && <h2>Trwa ładowanie strony</h2>}
        {eventData && (<div>
            <div>EventDetail - {id}</div>
        <div>EventDetail - {id}</div>
        <div>EventDetail - {id}</div>
        <h2>{eventData.title}</h2>
        <p>{eventData.startDate}</p>
        <p>{eventData.startTime}</p>
        <p>{eventData.city}</p>
        <p>{eventData.category}</p>
        <p>{eventData.description}</p>
        <button>Dołącz</button>
        </div>)}
    </div>
  )
}

export default EventDetail