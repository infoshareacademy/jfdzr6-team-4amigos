import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { queryProfiles } from "../../api";

const Profile = () => {
  const { docId } = useParams();
  const [profile, setProfile] = useState([]);

  const getProfile = (docId) => {
    queryProfiles(docId, (querySnapshot) => {
      const profile = querySnapshot.docs.map((doc) => {
        
        return { id: doc.id, ...doc.data() };
      });

      setProfile(...profile);
    });
  };

  useEffect(() => {
    getProfile(docId);
  }, [docId]);
  return <div>{profile && <div>Profile: {profile.age}</div>}</div>;
};

export default Profile;
