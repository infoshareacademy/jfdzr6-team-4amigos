import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfiles, registerDbListener } from "../../api";
import { sportsIcon } from "../../utils/sportsLabel";
import { Container, CardContainer, ProfilesContainer, CardPictureWrapper, CardInfoWrapper } from "./Profiles.styled";
import defaultPicture from "../../assets/img/defaultPicture.png";

const Profiles = ({ uid, sports }) => {
  const [profiles, setProfiles] = useState([]);


  useEffect(() => {
    registerDbListener(querySnapshot => {
      const retriveProfiles = getProfiles(querySnapshot).filter(user => user.id !== uid)
      setProfiles(retriveProfiles)
    }, sports)
  }, [uid, sports])

  const renderProfiles = profiles.map(({ id, name, sports, profilePicture, description }) => {
    return <CardContainer key={id}>
      <Link to={`/profiles/${id}`}>
        <CardPictureWrapper>
          <img src={profilePicture || defaultPicture} alt={name} />
          <span>{name}</span>
        </CardPictureWrapper>
        <CardInfoWrapper>
          <ul>{sports.map(sport => <li key={sport}>{sportsIcon[sport]}</li>)}</ul>
          <p>{`${description.slice(0, 50)}...`}</p>
          <span className="separator"></span>
        </CardInfoWrapper>

        <button>Zaczep</button>
      </Link>

    </CardContainer>;
  });

  return (
    <Container>
      <ProfilesContainer>
        {renderProfiles}
      </ProfilesContainer>
    </Container>
  );
};

export default Profiles;
