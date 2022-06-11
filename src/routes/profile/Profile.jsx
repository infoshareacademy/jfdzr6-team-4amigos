import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";
import { sportsIcon } from "../../utils/sportsLabel";

const Profile = () => {
  const { docId } = useParams();
  const [profile, setProfile] = useState({sports: []});

  const getProfile = (docId) => {
    const documentRef = doc(db, "users", docId);
    getDoc(documentRef).then((doc) => {
      setProfile({
        id: doc.id,
        ...doc.data(),
      });
    });
  };

  useEffect(() => {
    getProfile(docId);
  }, [docId]);


  return (
    <div>
      <h2>{profile.name}</h2>
      <div>
        <img alt="profilePicture" src={profile.profilePicture} width="150px" />
      </div>

      <ul>
      <li>Płeć: {profile.gender}</li>
      <li>Wiek: {profile.age}</li>
      <li>Miasto: {profile.city}</li>
      <li>Sporty które uprawiam</li>
      <ul>{profile.sports.map( sport=><li key={sport}>{sportsIcon[sport]}</li>)}</ul>
      <li>Poziom zaawansowania</li>
      <p>Np. zaawansowany - jakiś pasek?</p>
      <li>O mnie:</li>
      <p>{profile.description}</p>
      </ul>

    </div>
  );
};

export default Profile;
