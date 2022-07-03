import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProfiles, registerDbListener } from "../../api";
import { sportsIcon, sportsTooltip } from "../../utils/sportsLabel";
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
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    registerDbListener(
      (querySnapshot) => {
        const retriveProfiles = getProfiles(querySnapshot).filter(
          (user) => user.id !== userData.id
        );
        setProfiles(retriveProfiles);
      },
      userData.sports,
      userData.province
    );
  }, [userData.id, userData.sports]);

  const renderProfiles = profiles.map(
    ({ id, name, sports, profilePicture, description, city }) => {
      const renderSportsIcon = sports.sort().map((sport) => (
        <Tippy content={sportsTooltip[sport]} key={sport}>
          <li>{sportsIcon[sport]}</li>
        </Tippy>
      ));

      return (
        <CardContainer key={id}>
          <CardPictureWrapper>
            <img src={profilePicture || defaultPicture} alt={name} />
            <div>
              <span>{name}</span>
              <p>{city}</p>
            </div>
          </CardPictureWrapper>
          <CardInfoWrapper>
            <ul>{renderSportsIcon}</ul>
            <p>{description}</p>
            <span className="separator"></span>
          </CardInfoWrapper>
          <Link to={`/profiles/${id}`}>
            <button>Wyświetl profil</button>
          </Link>
        </CardContainer>
      );
    }
  );

  return (
    <Container>
      <Filters
        setProfiles={setProfiles}
        sports={userData.sports}
        uid={userData.id}
        userProvince={userData.province}
      />
      <ProfilesContainer>{renderProfiles}</ProfilesContainer>
    </Container>
  );
};

export default Profiles;
