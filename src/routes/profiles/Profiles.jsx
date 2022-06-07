import React, { useEffect, useState } from "react";
import { getProfiles, registerDbListener } from "../../api";
import { sportsIcon } from "../../utils/sportsLabel";
import { Container,CardContainer, ProfilesContainer, CardPictureWrapper,CardInfoWrapper } from "./Profiles.styled";

const Profiles = ({uid,sports}) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    registerDbListener(querySnapshot => {
      const retriveProfiles = getProfiles(querySnapshot).filter(user=> user.id!==uid)
      setProfiles(retriveProfiles)
    }, sports)
  }, [uid,sports])

  const renderProfiles = profiles.map(({ id, name, sports, profilePicture }) => {
    return <CardContainer key={id}>
      <CardPictureWrapper>
        <img src={profilePicture || "https://images.unsplash.com/photo-1653953547304-9f434ab5cd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"} alt={name}/>
        <span>{name}</span>
      </CardPictureWrapper>
      <CardInfoWrapper>
        <ul>{sports.map(sport => <li key={sport}>{sportsIcon[sport]}</li>)}</ul>
      <p>Chciałabym poznać nowych i ciekawych ludzi. Jestem osobą...</p>
      <span className="separator"></span>
      </CardInfoWrapper>
      {/* <Link to={`/profiles/${id}`}>Wyświetl profil</Link> */}
      <button>Zaczep</button>
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
