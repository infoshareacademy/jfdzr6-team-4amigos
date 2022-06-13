import { doc, Timestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../api/firebase'
import { updateDoc } from 'firebase/firestore'
import { ChatContainer, ChatMessagesWrapper, IncommingMessage, OutgoingMessage, TypingInput } from './ChatStyle'
import { addMessage, getChat } from '../../api'

const Chat = ({ profileData, uid }) => {
    const loggedUserId = uid
    const [chat, setChat] = useState({ messages: [] })
    const [inputValue, setInputValue] = useState("")
    const chatId = profileData.chatHistory[loggedUserId].id
    const docRef = doc(db, "chats", chatId)
    useEffect(() => {
        getChat(chatId, docSnapshot => {
            setChat({ id: docSnapshot.id, ...docSnapshot.data() });
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!inputValue.trim() || inputValue.length > 100) {
            return
        }
        const data = { messages: [...chat.messages, { createdAt: Timestamp.fromDate(new Date()), idAuthor: loggedUserId, message: inputValue }] }
        // updateDoc(docRef, data)
        addMessage(chatId, data)
        setInputValue("")
    }

    const renderMessages = chat.messages.map(chatElement => {
        return loggedUserId === chatElement.idAuthor ? <OutgoingMessage key={chatElement.createdAt}>{chatElement.message}</OutgoingMessage> : <IncommingMessage key={chatElement.createdAt}>{chatElement.message}</IncommingMessage>

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