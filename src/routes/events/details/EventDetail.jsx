import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteEvent, getEvent,updateEvent} from '../../../api/events'
import { AuthContext } from '../../../context/Auth'
import EditEventElement from '../eventElement/EditEventElement'

const EventDetail = () => {
    const {userData} =useContext(AuthContext)
    const {id} = useParams()
    const [eventData, setEventData] = useState(null)
    const [error,setError] =useState(null)
    const [isPending, setIsPending] = useState(false)
    const [draftId, setDraftId] = useState(null)
    const navigate = useNavigate()

    const enterEditMode = (id) => {
        setDraftId(id)
    }

    const cancelEditMode = () => {
        setDraftId(null)
    }

    useEffect( ()=>{
        getEvent(id, docEvent=>{
            setEventData({id:docEvent.id, ...docEvent.data()})
        })
    }, [id])

    const handleClick= () =>{
        setIsPending(true)
        if (eventData.members.includes(userData.id)) {
            setError("uzytkownik dołączył juz do wydarzenia")
            setIsPending(false)
            return
        }
        updateEvent(id, {members: [...eventData.members,userData.id]})
        .then( ()=>{
            setIsPending(false)
        })
        .catch( (error)=>{
            setIsPending(false)
            setError(error)
        })
    }

    const leaveEvent = (id) => {
        updateEvent(eventData.id, {members: eventData.members.filter(memberId=> memberId!== id)})
    }

    const deleteEventById = (id) => {
        deleteEvent(id)
        navigate("/events", { replace: true });
    }

    if (!eventData) {
        return <h2>Trwa ładowanie strony...</h2>
    }

    const renderJoinButton = () => {
        if (eventData.members.includes(userData.id)) {
            return <button onClick={()=>leaveEvent(userData.id)} disabled={isPending}>Zrezygnuj</button>
        }
        return <button onClick={handleClick} disabled={isPending}>{isPending ? "Dołączam..." : "Dołącz"}</button>
    }

    const renderEvent = eventData.id === draftId ? <EditEventElement event={eventData} cancelEditMode={cancelEditMode } /> : (<div>
            <div>EventDetail - {id}</div>
        <div>EventDetail - {id}</div>
        <div>EventDetail - {id}</div>
        <h2>{eventData.title}</h2>
        <p>{eventData.startDate}</p>
        <p>{eventData.startTime}</p>
        <p>{eventData.city}</p>
        <p>{eventData.category}</p>
        <p>{eventData.description}</p>
              {renderJoinButton()}
              {userData.id === eventData.idAdmin && <button onClick={() => deleteEventById(eventData.id)}>Usuń</button>}
            {userData.id === eventData.idAdmin && <button onClick={() => enterEditMode(eventData.id)}>Edytuj</button>}
        </div>)

  return (
      <div >
          {error && <h2>{error}</h2>}
          {renderEvent}
        {!eventData && <h2>Trwa ładowanie strony</h2>}
        
    </div>
  )
}

export default EventDetail