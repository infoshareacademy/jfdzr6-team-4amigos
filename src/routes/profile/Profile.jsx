import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { OpenChatButton, ProfileContainer, ProfileDetailsWrapper, ProgressBar } from "./ProfileStyle";
import { FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa"
import { sportsIcon } from "../../utils/sportsLabel";
import Chat from "../../components/chat/Chat";
import { createChat, createChatBetweenUsers, getChatRefById, getProfile } from "../../api";
import defaultPicture from "../../assets/img/defaultPicture.png";

const Profile = ({ uid, userData }) => {
  const defaultValue = {
    name: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    city: "",
    chatHistory: {},
    sports: []
  }
  const { docId } = useParams();
  const [profile, setProfile] = useState(defaultValue);
  const [isActive, setIsActive] = useState(false);


  const openChat = async () => {
    if (!profile.chatHistory[uid]) {
      const docChatRef = await createChat({ messages: [] })
      const chatHistoryReference = getChatRefById(docChatRef.id)
      const dataProfile = { ...profile, chatHistory: { ...profile.chatHistory, [uid]: chatHistoryReference } }
      const dataLoggedUser = { ...userData, chatHistory: { ...userData.chatHistory, [docId]: chatHistoryReference } }
      await createChatBetweenUsers(docId, uid, dataProfile, dataLoggedUser)
    }
    setIsActive(true)
  }

  useEffect(() => {
    getProfile(docId, docSnapshot => {
      setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
    })
  }, [docId]);

  return <ProfileContainer>
    <img src={profile.profilePicture || defaultPicture} alt={profile.name} />
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
      <ProgressBar experience={"intermediate"} />
      <h4>O mnie</h4>
      <p>{profile.description}</p>
      {!isActive && <OpenChatButton onClick={openChat}>Zacznij rozmowę</OpenChatButton>}
    </ProfileDetailsWrapper>
    {isActive && <Chat profileData={profile} uid={uid} />}
  </ProfileContainer>;
};

export default Profile;
