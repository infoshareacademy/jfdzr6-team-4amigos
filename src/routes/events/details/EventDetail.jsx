import { doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserRef } from '../../../api'
import { getEvent,updateEvent} from '../../../api/events'
import { AuthContext } from '../../../context/Auth'

const EventDetail = () => {
    const {userData} =useContext(AuthContext)
    const {id} = useParams()
    const [eventData, setEventData] = useState(null)

    useEffect( ()=>{
        getEvent(id, docEvent=>{
            setEventData({id:docEvent.id, ...docEvent.data()})
        })
    },[])

    const handleClick= () =>{
        const userRef = getUserRef(userData.id)
        updateEvent(id, {members: {[userData.id]: userRef}})
    }

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
        <button onClick={handleClick}>Dołącz</button>
        </div>)}
    </div>
  )
}

export default EventDetail