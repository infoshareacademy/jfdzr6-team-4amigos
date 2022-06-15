import React, { useEffect, useState } from 'react'
import { getChat } from '../../api'
import { getChattingUsers } from '../../api/messages'
import { IncommingMessage, OutgoingMessage } from '../../components/chat/ChatStyle'
import { ChatContainer, Container } from './MessagesStyle'

const Messages = ({ uid, userData }) => {
    const [usersWithChat, setUsersWithChat] = useState(null)
    const [chat, setChat] = useState({ messages: [] })


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
        return <li key={id} onClick={() => openChat(chatHistory[uid].id)}>
            <div>
                <div>{name}</div>
            </div>
        </li>
    })

    const openChat = (id) => {
        getChat(id, docSnapshot => {
            setChat({ id: docSnapshot.id, ...docSnapshot.data() })
        })
    }

    const renderMessages = chat.messages.map(chatElement => {
        return uid === chatElement.idAuthor ? <OutgoingMessage key={chatElement.createdAt}>{chatElement.message}</OutgoingMessage> : <IncommingMessage key={chatElement.createdAt}>{chatElement.message}</IncommingMessage>

    })

    return (
        <Container >
            <div className="people-list" id="people-list">
                <ul className="list">
                    {renderUsersWithChats}
                </ul>
            </div>

            <ChatContainer >
                <div className="chat-header clearfix">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

                    <div className="chat-about">
                        <div className="chat-with">Chat with Vincent Porter</div>
                    </div>
                </div>

                <div className="chat-history">
                    <ul>
                        <li className="clearfix">
                            <div className="message-data align-right">
                                <span className="message-data-time" >10:10 AM, Today</span>
                                <span className="message-data-name" >Olia</span> <i className="fa fa-circle me"></i>

                            </div>
                            <div className="message other-message float-right">
                                Hi Vincent, how are you? How is the project coming along?
                            </div>
                        </li>

                        {renderMessages}

                    </ul>

                </div>

                <div className="chat-message clearfix">
                    <textarea name="message-to-send" id="message-to-send" placeholder="Type your message" rows="3"></textarea>

                    <button>Send</button>

                </div>

            </ChatContainer>

        </Container>

    )
}

export default Messages