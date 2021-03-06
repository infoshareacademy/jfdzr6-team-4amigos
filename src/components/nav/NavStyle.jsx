import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNav = styled.nav`
  min-width: 100%;
  height: 80px;
  display: flex;
  flex-grow: 1;
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
`;

export const StyledLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
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
`;
