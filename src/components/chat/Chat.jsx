import { Timestamp } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import {
  ChatContainer,
  ChatMessagesWrapper,
  IncommingMessage,
  OutgoingMessage,
  TypingInput,
} from "./ChatStyle";
import { addMessage, getChat } from "../../api";

const Chat = ({ profileData, uid }) => {
  const loggedUserId = uid;
  const [chat, setChat] = useState({ messages: [] });
  const [inputValue, setInputValue] = useState("");
  const chatId = profileData.chatHistory[loggedUserId].id;
  const bottomRef = useRef(null);
  useEffect(() => {
    getChat(chatId, (docSnapshot) => {
      setChat({ id: docSnapshot.id, ...docSnapshot.data() });
    });
  }, [chatId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [chat.messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim() || inputValue.length > 100) {
      return;
    }
    const data = {
      messages: [
        ...chat.messages,
        {
          createdAt: Timestamp.fromDate(new Date()),
          idAuthor: loggedUserId,
          message: inputValue,
        },
      ],
    };
    addMessage(chatId, data);
    setInputValue("");
  };

  const renderMessages = chat.messages.map((chatElement) => {
    return loggedUserId === chatElement.idAuthor ? (
      <OutgoingMessage key={chatElement.createdAt}>
        {chatElement.message}
      </OutgoingMessage>
    ) : (
      <IncommingMessage key={chatElement.createdAt}>
        {chatElement.message}
      </IncommingMessage>
    );
  });

  return (
    <ChatContainer onSubmit={handleSubmit}>
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
  );
};

export default Chat;
