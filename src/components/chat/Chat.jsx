import { collection, doc, getDoc, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import { ChatContainer, ChatMessagesWrapper, IncommingMessage, OutgoingMessage, TypingInput } from './ChatStyle'

const Chat = ({ profileData }) => {
    const loggedUserId = "0DQ9iW4Em4MiPXiu0tJkXjRlmzn2"
    const [messages, setMessages] = useState({ messages: [] })
    useEffect(() => {
        const profilesCollection = collection(db, "chats");
        // onSnapshot(query(profilesCollection, where("sports", "array-contains-any", "")))
        const chatId = profileData.chatHistory[loggedUserId].id
        const docRef = doc(db, "chats", chatId)
        getDoc(docRef).then(docSnapshot => {
            // console.log({ id: docSnapshot.id, ...docSnapshot.data() });
            setMessages({ id: docSnapshot.id, ...docSnapshot.data() });
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const renderMessages = messages.messages.map(message => {
        return loggedUserId === message.idAuthor ? <OutgoingMessage>{message.message}</OutgoingMessage> : <OutgoingMessage>{message.message}</OutgoingMessage>

    })

    return (
        <ChatContainer onSubmit={handleSubmit}>
            <ChatMessagesWrapper>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <IncommingMessage>Hello World!</IncommingMessage>
                <OutgoingMessage>Hello World!</OutgoingMessage>
                <OutgoingMessage>Hello Karol!</OutgoingMessage>
                {renderMessages}
            </ChatMessagesWrapper>
            <TypingInput placeholder="Aa..." />
        </ChatContainer>
    )
}

export default Chat