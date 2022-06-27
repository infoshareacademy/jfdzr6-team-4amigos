import styled from "styled-components";
import { sportExperience } from "../../utils/sportsLabel";

export const ProfileContainer = styled.section`
  width: 85%;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #262f40;
  gap: 30px;

  img {
    flex: 2;
    max-width: 300px;
    max-height: 450px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const ProfileDetailsWrapper = styled.div`
  flex: 3;
  max-width: 500px;
  padding: 0 10px;
  font-size: 18px;
  position: relative;

  h3 {
    font-size: 32px;
    margin: 0 0 10px 0;
  }

  h4 {
    font-size: 24px;
    margin: 24px 0;
  }

  ul {
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  li {
    font-size: 24px;
    background-color: #edece8;
    text-align: center;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
  }

  div {
    margin: 5px;
  }

  span {
    margin: 15px;
  }
`;

export const ProgressBar = styled.div`
  width: 200px;
  height: 4px;
  background-color: #edece8;
  border-radius: 10px;
  position: relative;
  &::after {
    display: block;
    content: "";
    position: absolute;
    width: ${(props) => sportExperience[props.experience]};
    height: 100%;
    background-color: #ff8020;
    border-radius: 10px;
  }
`;

export const OpenChatButton = styled.button`
  background-color: #ff8020;
  border: none;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 0 15px;
  transition: background-color 0.2s ease;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c5c7c5;
  }
`;
