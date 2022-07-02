import styled from "styled-components";

export const StyledBtn = styled.button`
  width: 150px;
  height: 30px;
  background-color: #ff8020;
  border-radius: 5px;
  border: none;
  color: #eee;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  margin: 10px 10px;
  padding: 2px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #c5c7c5;
    color: #000;
  }
`;

export const StyledAddComment = styled.div`
  margin: 20px;
  border: none;
  input {
    width: 590px;
    border: none;
    border-radius: 5px;
    background: #f8f3f3;
    height: 30px;
    :focus-visible {
      outline: 3px solid #ff8020;
    }
`;

export const StyledComment = styled.div`
  background: #f8f3f3;
  width: 760px;
  margin: 20px auto;

  p {
    background: #f8f3f3;
    padding: 10px;
    margin: 0;
    margin-left: 10px;
  }

  h5 {
    padding: 10px;
    margin: 0;
  }
`;
