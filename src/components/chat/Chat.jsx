import { collection, doc, getDoc, onSnapshot, query, orderBy, Timestamp, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import { updateDoc } from 'firebase/firestore'
import { ChatContainer, ChatMessagesWrapper, IncommingMessage, OutgoingMessage, TypingInput } from './ChatStyle'

const Chat = ({ profileData }) => {
    const loggedUserId = "0DQ9iW4Em4MiPXiu0tJkXjRlmzn2"
    const [chat, setChat] = useState({ messages: [] })
    const [inputValue, setInputValue] = useState("")
    const chatId = profileData.chatHistory[loggedUserId].id
    const docRef = doc(db, "chats", chatId)
    useEffect(() => {
        onSnapshot(docRef, docSnapshot => {
            setChat({ id: docSnapshot.id, ...docSnapshot.data() });
        })
        // const q = query(docRef, orderBy('date', 'desc'))
        // onSnapshot(query(collection(db, "chats"), where("id", "==", chatId)), docSnapshot => {
        //     setChat({ id: docSnapshot.id, ...docSnapshot.data() });
        // })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = { messages: [...chat.messages, { date: Timestamp.fromDate(new Date()), idAuthor: loggedUserId, message: inputValue }] }
        updateDoc(docRef, data)
        setInputValue("")
    }

    const renderMessages = chat.messages.map(chatElement => {
        return loggedUserId === chatElement.idAuthor ? <OutgoingMessage>{chatElement.message}</OutgoingMessage> : <IncommingMessage>{chatElement.message}</IncommingMessage>

    })

    return (
        <ChatContainer onSubmit={handleSubmit}>
            <ChatMessagesWrapper>
                {renderMessages}
            </ChatMessagesWrapper>
            <TypingInput placeholder="Aa..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </ChatContainer>
    )
}

export default Chat