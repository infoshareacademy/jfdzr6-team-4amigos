import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";
import { OpenChatButton, ProfileContainer, ProfileDetailsWrapper, ProgressBar } from "./ProfileStyle";
import { FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa"
import { sportsIcon } from "../../utils/sportsLabel";
import Chat from "../../components/chat/Chat";
import { chatsCollectionRef } from "../../api";

const Profile = () => {
  const defaultValue = {
    name: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    city: "",
    chatHistory: null,
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

  const openChat = async () => {
    const loggedUserId = "0DQ9iW4Em4MiPXiu0tJkXjRlmzn2"
    if (!profile.chatHistory[loggedUserId]) {
      console.log("utwórz chatHistory");
      const docRef = doc(db, "users", docId)
      const docChatRef = await addDoc(chatsCollectionRef, { messages: [] })
      console.log(docChatRef.id);
      const data = { ...profile, chatHistory: doc(db, "chats", docChatRef.id) }
      // Zrobic update jeszcze zalogowanemu użytkownikowi
      updateDoc(docRef, data)
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
    {/* {isActive && <Chat profileData={profile} />} */}
  </ProfileContainer>;
};

export default Profile;
