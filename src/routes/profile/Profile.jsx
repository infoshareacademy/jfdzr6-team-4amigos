import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../api/firebase";

const Profile = () => {
  const { docId } = useParams();
  const [profile, setProfile] = useState([]);

  const getProfile = (docId) => {
    getDoc(doc(db,"users",docId))
    .then(docData=>{
      const data = docData.data();
      setProfile(data)
    })
  };

  useEffect(() => {
    getProfile(docId);
  }, [docId]);
  return <div>{profile && <div>Profile: {profile.age}</div>}</div>;
};

export default Profile;
