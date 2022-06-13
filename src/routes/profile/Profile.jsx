import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";
import { OpenChatButton, ProfileContainer, ProfileDetailsWrapper, ProgressBar } from "./ProfileStyle";
import { FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa"
import { sportsIcon } from "../../utils/sportsLabel";
import Chat from "../../components/chat/Chat";
import { createChat, createChatBetweenUsers, getChatRefById } from "../../api";

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
  const [isActive, setIsActive] = useState(false)

  const getProfile = (docId) => {
    const userDocRef = doc(db, "users", docId)
    onSnapshot(userDocRef, docSnapshot => {
      setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
    })
  };

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
      <ProgressBar experience={"intermediate"} />
      <h4>O mnie</h4>
      <p>{profile.description}</p>
      {!isActive && <OpenChatButton onClick={openChat}>Zacznij rozmowę</OpenChatButton>}
    </ProfileDetailsWrapper>
    {isActive && <Chat profileData={profile} uid={uid} />}
  </ProfileContainer>;
};

export default Profile;
