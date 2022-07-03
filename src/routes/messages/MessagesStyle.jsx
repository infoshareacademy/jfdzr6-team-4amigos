import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 100%;
  max-height: 550px;
  max-width: 1440px;
  margin: 100px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  display: flex;
`;

export const PeopleList = styled.div`
  flex: 1;
  max-width: 250px;
  min-width: 175px;
  background-color: #ffc524;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px 0 0 10px;
  overflow-y: scroll;
  ul {
    list-style: none;
    color: #fff;

    li {
      margin: 20px 0px;
      transition: all 0.2s ease;
      &:hover {
        background-color: #ff8020;
        border-radius: 10px;
      }
    }
  }
`;

export const ChatContainer = styled.form`
  box-sizing: border-box;
  flex: 2;
  min-width: 350px;
  border-radius: 10px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const AvatarWrapper = styled.div`
  border-bottom: 1px solid lightgray;
`;

export const Avatar = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 50px;
    height: 50px;
    clip-path: circle();
    object-fit: cover;
  }
`;
