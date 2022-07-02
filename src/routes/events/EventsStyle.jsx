import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: #ffc524;
  margin-top: 25px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  border-radius: 0 10px 10px 0;
  ul {
    list-style: none;
  }
  li {
    margin: 10px 0;
    font-size: 20px;
  }

  h4 {
    font-size: 20px;
    width: 100%;
    border-bottom: 2px solid #ff8020;
    padding-bottom: 3px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #ff8020;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin-top: 100px;
  display: flex;
  gap: 40px;
`;

export const EventsListContainer = styled.div`
  width: 74%;
  color: #262f40;
`;

export const CardContainer = styled.div`
  width: 260px;
  height: fit-content;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    background-color: #ff8020;
    color: #fff;
    width: 100%;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
  }

  h2 {
    margin-bottom: 0;
  }
`;

export const EventsContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin-top: 100px;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 30px;
  color: #262f40;
`;

export const Icon = styled.div`
  font-size: 90px;
  background-color: #edece8;
  border-radius: 5px;
  clip-path: circle();
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 70%;
  }
`;

export const DateWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  svg {
    font-size: 16px;
  }

  span {
    font-size: 14px;
  }
`;

export const InfoWrapper = styled.div`
  width: 80%;
  margin-bottom: 5px;
  span {
    font-size: 14px;

    svg {
      margin-right: 5px;
    }
  }
`;
