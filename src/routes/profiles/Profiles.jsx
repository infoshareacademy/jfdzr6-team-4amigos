import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfiles, registerDbListener } from "../../api";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    registerDbListener(querySnapshot => {
      setProfiles(getProfiles(querySnapshot))
    })
  }, []);

  const renderProfiles = profiles.map((profile) => {
    return <li key={profile.id}><Link to={`/profiles/${profile.id}`}>{profile.name}{profile.sports.map(sport => <p>{sport}</p>)}</Link></li>;
  });
  return (
    <div>
      Profiles
      <ul>{renderProfiles}</ul>
    </div>
  );
};

export default Profiles;
