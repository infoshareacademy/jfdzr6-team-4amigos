import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 5%;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 100px;
  h1 {
    font-size: 32px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #c5c7c5;
    margin: 0;
  }
  p {
    font-size: 16px;
    font-weight: 700;
    font-family: "Open Sans", sans-serif;
    color: #c5c7c5;
  }
  img {
    width: 800px;
    height: 100%;
    background-color: #fff;
    border-radius: 5%;
  }
  button {
    width: 300px;
    height: 40px;
    background-color: #ffc524;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    color: #eee;
    text-align: center;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    margin: 40px 10px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #c5c7c5;
      color: #000;
    }
  }
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 100%;
  background-color: #ffc524;
  padding: 0 20px;
  margin: 5px auto;
  border-radius: 5%;

  p {
    font-size: 14px;
    color: #fff;
  }
  input {
    width: 300px;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    color: #eee;
    text-align: center;
    font-size: 400;
    font-weight: bold;
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #c5c7c5;
      color: #000;
    }
  }
  button {
    width: 300px;
    height: 40px;
    background-color: #ff8020;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    color: #eee;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    margin: 40px 10px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #c5c7c5;
      color: #000;
    }
  }
`;

export const StyledLink = styled(Link)`
    text-decoration: underline;
    color: #fff;
    font-size: 14px;
    margin: 0 10px;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #000;
    }
`;
