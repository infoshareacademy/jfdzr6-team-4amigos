import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background-color: #fff;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 80px;
  h1 {
    font-size: 32px;
    font-weight: 400;
    font-family: "Open Sans", sans-serif;
    color: #c5c7c5;
    margin-bottom: 30px;
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
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 400px;
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
    padding: 10px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    ::placeholder {
      color: #c5c7c5;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    border: 3px solid #ffc524;
    :hover {
      border: 3px solid #fe6e00;
    }
  }
  button {
    margin-top: 50px;
    background: #ff8020;
    border-radius: 5px;
    width: 300px;
    height: 40px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    border: none;
    color: #ffffff;
    margin: 40px 0px;
    transition: 0.3s;
    cursor: pointer;
    border: 1px solid #ffc524;
    :hover {
      background: #fe6e00;
      border: 1px solid #fe6e00;
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
`;
