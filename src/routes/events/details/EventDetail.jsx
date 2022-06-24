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
    const [error,setError] =useState(null)
    const [isPending,setIsPending] =useState(false)

    useEffect( ()=>{
        getEvent(id, docEvent=>{
            setEventData({id:docEvent.id, ...docEvent.data()})
        })
    },[])

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

    const renderJoinButton = () => {
        if (eventData.members.includes(userData.id)) {
            return <button onClick={()=>leaveEvent(userData.id)} disabled={isPending}>Zrezygnuj</button>
        }
        return <button onClick={handleClick} disabled={isPending}>{isPending ? "Dołączam..." : "Dołącz"}</button>
    }

  return (
      <div >
          {error && <h2>{ error}</h2>}
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
        {renderJoinButton()}
        </div>)}
    </div>
  )
}

export default EventDetail