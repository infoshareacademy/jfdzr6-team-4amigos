import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  OpenChatButton,
  ProfileContainer,
  ProfileDetailsWrapper,
} from "./ProfileStyle";
import { FaBirthdayCake, FaMapMarkerAlt } from "react-icons/fa";
import { sportsIcon, sportsTooltip } from "../../utils/sportsLabel";
import Chat from "../../components/chat/Chat";
import {
  createChat,
  createChatBetweenUsers,
  getChatRefById,
  getProfile,
} from "../../api";
import defaultPicture from "../../assets/img/defaultPicture.png";
import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Profile = () => {
  const defaultValue = {
    name: "",
    gender: "",
    age: "",
    email: "",
    password: "",
    city: "",
    chatHistory: {},
    sports: [],
  };
  const { docId } = useParams();
  const [profile, setProfile] = useState(defaultValue);
  const [isActive, setIsActive] = useState(false);
  const { userData } = useContext(AuthContext);

  const openChat = async () => {
    if (!profile.chatHistory[userData.id]) {
      const docChatRef = await createChat({ messages: [] });
      const chatHistoryReference = getChatRefById(docChatRef.id);
      const dataProfile = {
        ...profile,
        chatHistory: {
          ...profile.chatHistory,
          [userData.id]: chatHistoryReference,
        },
      };
      const dataLoggedUser = {
        ...userData,
        chatHistory: { ...userData.chatHistory, [docId]: chatHistoryReference },
      };
      await createChatBetweenUsers(
        docId,
        userData.id,
        dataProfile,
        dataLoggedUser
      );
    }
    setIsActive(true);
  };

  useEffect(() => {
    getProfile(docId, (docSnapshot) => {
      setProfile({ id: docSnapshot.id, ...docSnapshot.data() });
    });
  }, [docId]);

  return (
    <ProfileContainer>
      <img src={profile.profilePicture || defaultPicture} alt={profile.name} />
      <ProfileDetailsWrapper>
        <h3>{profile.name}</h3>
        <div>
          <FaBirthdayCake />
          <span>{profile.age} lat</span>
        </div>
        <div>
          <FaMapMarkerAlt />
          <span>{profile.city}</span>
        </div>
        <h4>Sporty, kt??re uprawiam</h4>
        <ul>
          {profile.sports.map((sport) => (
            <Tippy content={sportsTooltip[sport]} key={sport}>
              <li>{sportsIcon[sport]}</li>
            </Tippy>
          ))}
        </ul>
        <h4>O mnie</h4>
        <p>{profile.description}</p>
        {!isActive && (
          <OpenChatButton onClick={openChat}>Zacznij rozmow??</OpenChatButton>
        )}
      </ProfileDetailsWrapper>
      {isActive && <Chat profileData={profile} uid={userData.id} />}
    </ProfileContainer>
  );
};

export default Profile;
