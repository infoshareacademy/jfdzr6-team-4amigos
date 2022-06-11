import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";

import { ChatContainer, ChatMessagesWrapper, IncommingMessage, OpenChatButton, OutgoingMessage, ProfileContainer, ProfileDetailsWrapper, ProgressBar, TypingInput } from "./ProfileStyle";
import { FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa"
import { sportsIcon } from "../../utils/sportsLabel";

const Profile = () => {
  const defaultValue = {
    name: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    city: "",
    sports: []
  }
  const { docId } = useParams();
  const [profile, setProfile] = useState(defaultValue);
  const [isActive, setIsActive] = useState(false)

  const getProfile = (docId) => {
    getDoc(doc(db, "users", docId))
      .then(docData => {
        const data = docData.data();
        setProfile(data)
      })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const openChat = () => {
    setIsActive(true)
  }

  useEffect(() => {
    getProfile(docId);
  }, [docId]);

  return <ProfileContainer>
    <img src={profile.profilePicture} alt="profile photo" />
    <ProfileDetailsWrapper >
      <h3>{profile.name}</h3>
      <div>
        <FaBirthdayCake />
        <span>{profile.age} lat</span>
      </div>
      <div>
        <FaMapMarkerAlt />
        <span>{profile.city}</span>
      </div>
      <h4>Sporty, które uprawiam</h4>
      <ul>{profile.sports.map(sport => <li key={sport}>{sportsIcon[sport]}</li>)}</ul>
      <h4>Poziom zaawansowania</h4>
      <ProgressBar experience={"intermediate"}/>
      <h4>O mnie</h4>
      <p>{profile.description}</p>
      {!isActive && <OpenChatButton onClick={openChat}>Zacznij rozmowę</OpenChatButton>}
    </ProfileDetailsWrapper>
    {isActive && <ChatContainer onSubmit={handleSubmit}>
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
      </ChatMessagesWrapper>
      <TypingInput placeholder="Aa..." />
    </ChatContainer>}
  </ProfileContainer>;
};

export default Profile;
