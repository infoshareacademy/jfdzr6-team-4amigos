import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfiles, registerDbListener } from "../../api";
import { sportsIcon } from "../../utils/sportsLabel";
import defaultPicture from "../../assets/defaultPicture.png";

const Profiles = ( {sports,uid}) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    registerDbListener((querySnapshot) => {
      const users = getProfiles(querySnapshot).filter( users=>users.id!==uid)
      setProfiles(users)
    }, sports)
  }, [sports]);

  const renderProfiles = profiles.map(({id,name,sports, profilePicture}) => {

    const renderSportsIcon = sports.map( sport=><li key={sport}>{sportsIcon[sport]}</li>)

    return <div key={id}>
      <Link to={`/profiles/${id}`}>
      <img src={profilePicture || defaultPicture} width="150px"/>
      <h3>{name}</h3>
      <ul>{renderSportsIcon}</ul>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eveniet debitis pariatur iure eaque, dolor velit minus aperiam fuga perferendis!</p>
      </Link>
      <div>
      <button>Zaczep</button>
      <button>Wiadomość</button>
      </div>
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
