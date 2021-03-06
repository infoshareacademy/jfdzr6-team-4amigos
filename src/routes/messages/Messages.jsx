import { Timestamp } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { addMessage, getChat } from "../../api";
import { getChattingUsers } from "../../api/messages";
import {
  ChatMessagesWrapper,
  IncommingMessage,
  OutgoingMessage,
  TypingInput,
} from "../../components/chat/ChatStyle";
import {
  Avatar,
  AvatarWrapper,
  ChatContainer,
  Container,
  PeopleList,
} from "./MessagesStyle";
import defaultPicture from "../../assets/img/defaultPicture.png";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";

const Messages = () => {
  const { userData } = useContext(AuthContext);
  const [usersWithChat, setUsersWithChat] = useState([]);
  const [chat, setChat] = useState({ messages: [] });
  const [writtingUser, setWrittingUser] = useState({ name: "", id: "" });
  const [inputValue, setInputValue] = useState("");
  const bottomRef = useRef(null);

  const getUsersWithChat = async () => {
    try {
      getChattingUsers(Object.keys(userData.chatHistory), (querySnapshot) => {
        setUsersWithChat(
          querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsersWithChat();
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [chat.messages]);

  const renderUsersWithChats = usersWithChat.map((user) => {
    return (
      <li
        key={user.id}
        onClick={() => openChat(user.chatHistory[userData.id].id, user)}
      >
        <div>
          <Avatar>
            <img src={user.profilePicture || defaultPicture} alt={user.name} />
            {user.name}
          </Avatar>
        </div>
      </li>
    );
  });

  const openChat = (id, user) => {
    getChat(id, (docSnapshot) => {
      setChat({ id: docSnapshot.id, ...docSnapshot.data() });
      setWrittingUser({
        name: user.name,
        id: user.id,
        chatId: id,
        profilePicture: user.profilePicture,
      });
    });
  };

  const renderMessages = chat.messages.map((chatElement) => {
    return userData.id === chatElement.idAuthor ? (
      <OutgoingMessage key={chatElement.createdAt}>
        {chatElement.message}
      </OutgoingMessage>
    ) : (
      <IncommingMessage key={chatElement.createdAt}>
        {chatElement.message}
      </IncommingMessage>
    );
  });

  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || inputValue.length > 100) {
      return;
    }
    const data = {
      messages: [
        ...chat.messages,
        {
          createdAt: Timestamp.fromDate(new Date()),
          idAuthor: userData.id,
          message: inputValue,
        },
      ],
    };
    addMessage(writtingUser.chatId, data);
    setInputValue("");
  };

  return (
    <Container>
      <PeopleList>
        <ul>{renderUsersWithChats}</ul>
      </PeopleList>
      <ChatContainer onSubmit={sendMessage}>
        <AvatarWrapper>
          <Avatar>
            <img
              src={writtingUser.profilePicture || defaultPicture}
              alt={writtingUser.name}
            />
            {writtingUser.name || "Z nikim jeszcze nie otworzy??e?? chatu"}
          </Avatar>
        </AvatarWrapper>
        <ChatMessagesWrapper>
          <div className="growingBox"></div>
          {renderMessages}
          <div ref={bottomRef}></div>
        </ChatMessagesWrapper>
        <TypingInput
          placeholder="Aa..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </ChatContainer>
    </Container>
  );
};

export default Messages;
