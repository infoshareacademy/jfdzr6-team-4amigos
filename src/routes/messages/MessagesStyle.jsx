import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  max-width: 1440px;
  margin: 100px auto;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

export const PeopleList = styled.div`
  flex: 1;
  max-width: 250px;
  min-width: 175px;
  background-color: #ffc524;
  font-size: 16px;
  padding: 15px;
  border-radius: 10px 0 0 10px;
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
  flex: 2;
  min-width: 350px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  div {
    border-bottom: 1px solid lightgrey;
  }
`;

export const Avatar = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;

  img {
    width: 40px;
    height: 40px;
    clip-path: circle();
    object-fit: cover;
  }
`;
