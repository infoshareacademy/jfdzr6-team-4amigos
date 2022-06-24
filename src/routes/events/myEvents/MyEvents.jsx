import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { getEvents, registerListenerMyEvents } from '../../../api/events'
import { AuthContext } from '../../../context/Auth'

const MyEvents = () => {
    const {userData} =useContext(AuthContext)
    const [myEvents,setMyEvents] =useState(null)

    useEffect( ()=>{
        registerListenerMyEvents(userData.id, querySnapshot=>{
            setMyEvents(getEvents(querySnapshot))
        })
    }, [userData.id])
  
  if (!myEvents) {
    return <h2>Trwa ładowanie strony</h2>
  }
  
  const renderMyEvents = myEvents.map( ({id,title,category,city,description,startTime,startDate})=>{
    return <Link to={`/events/${id}`} key={id}>
      <h2>{title}</h2>
      <p>{category }</p>
      <p>{city }</p>
      <p>{description }</p>
      <p>{startDate }</p>
      <p>{startTime}</p>
   </Link> 
  })
  return (
    <div>
        <p>myevents</p>
      <p>myevents</p>
        {renderMyEvents}
    </div>
  )
}

export default MyEvents