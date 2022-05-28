import React, { useEffect, useState } from "react";
import { getProfiles, registerDbListener } from "../../api";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    registerDbListener(querySnapshot=>{
      setProfiles(getProfiles(querySnapshot))
    })
  }, []);

  const renderProfiles = profiles.map((profile) => {
    return <li key={profile.id}><a href={`/auth/profiles/${profile.userId}`}>{profile.name}</a></li>;
  });
  return (
    <div>
      Profiles
      <ul>{renderProfiles}</ul>
    </div>
  );
};

export default Profiles;
