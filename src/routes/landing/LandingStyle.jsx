import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 89vh;
  background-color: #fff;
  padding: 0 20px;
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 4rem;
  h1 {
    font-size: 128px;
    font-weight: 400;
    color: #c5c7c5;
    margin: 0;
  }
  p {
    font-size: 32px;
    color: #c5c7c5;
    margin: 10px 0;
  }
  p:nth-child(5) {
    font-size: 16px;
    color: #c5c7c5;
    margin: 0;
  }
  img {
    width: 800px;
    height: 100%;
    background-color: #fff;
    border-radius: 5%;
  }
  button {
    width: 400px;
    height: 60px;
    background-color: #ffc524;
    border-radius: 15px;
    border: none;
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0 10px 0;
    padding: 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #c5c7c5;
      color: #000;
    }
  }
`;
