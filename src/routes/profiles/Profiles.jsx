import { collection, getDoc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfiles, registerDbListener } from "../../api";
import { db } from "../../api/firebase";
import { sportsIcon } from "../../utils/sportsLabel";


const Profiles = () => {
  const [profiles, setProfiles] = useState([]);


  useEffect(() => {
    registerDbListener(querySnapshot => {
      setProfiles(getProfiles(querySnapshot))
    })
  }, []);


  const renderProfiles = profiles.map(({id,name,sports, profilePicture}) => {
    return <div key={id}>
      <img alt="profilePicture" src={profilePicture || "https://images.unsplash.com/photo-1653953547304-9f434ab5cd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} width="150px"/>
      <ul>{sports.map( sport=><li key={sport}>{sportsIcon[sport]}</li>)}</ul>
      <Link to={`/profiles/${id}`}>Wyświetl profil</Link>
    </div>;
  });


  return (
    <div>
      Profiles
    <ul>{renderProfiles}</ul>
    </div>
  );
};

export default Profiles;
