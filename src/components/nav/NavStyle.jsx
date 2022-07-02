import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  min-width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #ffc524;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-bottom: 1px solid #e6e6e6;
  @media (max-width: 412px) {
    height: 80px;
    padding: 0 10px;
  }
`;

export const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  min-width: 440px;
  height: 100%;
  @media (max-width: 412px) {
    display: none;
  }
`;

export const StyledMobileNavLinks = styled.div`
  display: none;
  @media (max-width: 412px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: #ffc524;
    width: 100%;
    height: 100%;
  }
`;

export const StyledLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;

  @media (max-width: 412px) {
    width: 40px;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  min-width: 440px;
  height: 100%;
  padding: 0 20px;
  margin: 0;

  p {
    font-size: 14px;
    color: #fff;
  }
  @media (max-width: 412px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #ffc524;
    min-width: 200px;
    height: 100%;

    p {
      display: none;
      font-size: 14px;
      color: #fff;

      &:first-child {
        margin-bottom: 10px;
      }
    }
  }
`;
export const StyledRegister = styled(NavLink)`
  min-width: 200px;
  height: 40px;
  background-color: #ff8020;
  border-radius: 5px;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin: 0 20px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c5;
    color: #000;
  }
  @media (max-width: 412px) {
    display: none;
  }
`;
export const StyledLogin = styled(NavLink)`
  min-width: 200px;
  height: 40px;
  background-color: #ff8020;
  border-radius: 5px;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c5;
    color: #000;
  }
  @media (max-width: 412px) {
    display: block;
    justify-self: center;
    align-items: center;
    margin: 0;
    padding: 10px;
    min-width: 200px;
    height: 40px;
    background-color: #ff8020;
    border-radius: 5px;
    color: #eee;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    margin: 0;
    padding: 10px;
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #c5c7c5;
      color: #000;
    }
  }
`;

export const StyledEvents = styled(NavLink)`
  min-width: 200px;
  height: 40px;
  background-color: #ff8020;
  border-radius: 5px;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c5;
    color: #000;
  }
  @media (max-width: 412px) {
    display: block;
    justify-self: center;
    align-items: center;
    margin: 0;
    padding: 10px;
    min-width: 200px;
    height: 40px;
    background-color: #ff8020;
    border-radius: 5px;
    color: #eee;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const StyledMessages = styled(NavLink)`
  min-width: 200px;
  height: 40px;
  background-color: #ff8020;
  border-radius: 5px;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin: 0 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c5;
    color: #000;
  }
  @media (max-width: 412px) {
    display: block;
    justify-self: center;
    align-items: center;
    margin: 0;
    padding: 10px;
    min-width: 200px;
    height: 40px;
    background-color: #ff8020;
    border-radius: 5px;
    color: #eee;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
  }
`;
