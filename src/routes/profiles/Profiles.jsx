import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfiles, registerDbListener } from "../../api";
import { sportsIcon } from "../../utils/sportsLabel";
import {
  Container,
  CardContainer,
  ProfilesContainer,
  CardPictureWrapper,
  CardInfoWrapper,
} from "./Profiles.styled";
import defaultPicture from "../../assets/img/defaultPicture.png";
import Filters from "../../components/filters/Filters";
import { AuthContext } from "../../context/Auth";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    registerDbListener((querySnapshot) => {
      const retriveProfiles = getProfiles(querySnapshot).filter(
        (user) => user.id !== userData.id
      );
      setProfiles(retriveProfiles);
    }, userData.sports);
  }, [userData.id, userData.sports]);

  const renderProfiles = profiles.map(
    ({ id, name, sports, profilePicture, description }) => {
      return (
        <CardContainer key={id}>
          <Link to={`/profiles/${id}`}>
            <CardPictureWrapper>
              <img src={profilePicture || defaultPicture} alt={name} />
              <span>{name}</span>
            </CardPictureWrapper>
            <CardInfoWrapper>
              <ul>
                {sports.map((sport) => (
                  <li key={sport}>{sportsIcon[sport]}</li>
                ))}
              </ul>
              <p>{`${description.slice(0, 50)}...`}</p>
              <span className="separator"></span>
            </CardInfoWrapper>

            <button>Zaczep</button>
          </Link>
        </CardContainer>
      );
    }
  );

  return (
    <Container>
      <Filters setProfiles={setProfiles} sports={userData.sports} />
      <ProfilesContainer>{renderProfiles}</ProfilesContainer>
    </Container>
  );
};

export default Profiles;
