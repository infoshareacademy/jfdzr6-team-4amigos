import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledEventDetail = styled.div`
  width: 800px;
  background: #fff;
  margin-top: 115px;
  margin-left: 50px;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 10px;
    background-color: #fff;
  }
  h2 {
    margin: 0 20px;
  }
`;

export const StyledBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #ff8020;
  border-radius: 5px;
  border: none;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 10px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c5;
    color: #000;
  }
`;
