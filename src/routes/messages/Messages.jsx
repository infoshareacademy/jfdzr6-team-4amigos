import { Timestamp } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { addMessage, getChat } from '../../api'
import { getChattingUsers } from '../../api/messages'
import Chat from '../../components/chat/Chat'
import { IncommingMessage, OutgoingMessage } from '../../components/chat/ChatStyle'
import { ChatContainer, Container } from './MessagesStyle'

const Messages = ({ uid, userData }) => {
    const [usersWithChat, setUsersWithChat] = useState(null)
    const [chat, setChat] = useState({ messages: [] })
    const [writtingUser, setWrittingUser] = useState({ name: "", id: "" })
    const [inputValue, setInputValue] = useState("")

    const getUsersWithChat = async () => {
        getChattingUsers(Object.keys(userData.chatHistory), querySnapshot => {
            setUsersWithChat(querySnapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() };
            }))
        })
    }

    useEffect(() => {
        getUsersWithChat()
    }, [])

    if (!usersWithChat) {
        return <p>ładowanie...</p>
    }

    const renderUsersWithChats = usersWithChat.map(({ id, name, chatHistory }) => {
        return <li key={id} onClick={() => openChat(chatHistory[uid].id, name)}>
            <div>
                <div>{name}</div>
            </div>

        </li>
    })

    const openChat = (id, name) => {
        getChat(id, docSnapshot => {
            setChat({ id: docSnapshot.id, ...docSnapshot.data() })
            setWrittingUser({ name: name, id: id })
        })
    }

    const renderMessages = chat.messages.map(chatElement => {
        return uid === chatElement.idAuthor ? <OutgoingMessage key={chatElement.createdAt}>{chatElement.message}</OutgoingMessage> : <IncommingMessage key={chatElement.createdAt}>{chatElement.message}</IncommingMessage>

    })

    const sendMessage = (e) => {
        e.preventDefault()
        if (!inputValue.trim() || inputValue.length > 100) {
            return
        }
        const data = { messages: [...chat.messages, { createdAt: Timestamp.fromDate(new Date()), idAuthor: uid, message: inputValue }] }
        const chatId = writtingUser.id
        addMessage(chatId, data)
        setInputValue("")
    }

    return (
        <Container >
            <div>
                <ul>
                    {renderUsersWithChats}
                </ul>
            </div>

            <ChatContainer >
                <div>

                    <div>
                        <div>{writtingUser.name || "Z nikim jeszcze nie otworzyłeś chatu"}</div>
                    </div>
                </div>

                <div>
                    <ul>
                        {renderMessages}
                    </ul>

                </div>

                <form onSubmit={sendMessage}>
                    <input placeholder="Napisz nową wiadomość" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }}></input>
                </form>

            </ChatContainer>



        </Container>

    )
}

export default Messages