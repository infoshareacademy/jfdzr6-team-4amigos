import { onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { getEvents, registerListenerMyEvents } from '../../../api/events'
import { AuthContext } from '../../../context/Auth'

const MyEvents = () => {
    const {userData} =useContext(AuthContext)
    const [myEvents,setMyEvents] =useState(null)

    useEffect( ()=>{
        registerListenerMyEvents(userData.id, querySnapshot=>{
            setMyEvents(getEvents(querySnapshot))
        })
    },[])
  return (
    <div>
        <p>myevents</p>
        <p>myevents</p>
        <p>myevents</p>
        <p>myevents</p>
        <p>myevents</p>
        <p>myevents</p>
    </div>
  )
}

export default MyEvents