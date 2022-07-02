import styled from "styled-components";

export const StyledForm = styled.form`
  width: 500px;
  background-color: #ffc524;
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  justify-content: space-between;
  color: #fff;
  border-radius: 10px;
  h3 {
    margin: 0 0 20px 0;
  }
`;

export const StyledInputDiv = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  border: none;
  label {
    margin: 10px 0;
  }
  textarea {
    height: 100px;
    border: none;
    border-radius: 5px;
    :focus-visible {
      outline: 3px solid #ff8020;
    }
  }
  input {
    border: none;
    border-radius: 5px;
    height: 25px;
    :focus-visible {
      outline: 3px solid #ff8020;
    }
  }
  select {
    border: none;
    border-radius: 5px;
    height: 25px;
  }
`;

export const StyledAddButton = styled.button`
  margin-top: 30px;
  background: #ff8020;
  border-radius: 5px;
  width: 400px;
  height: 50px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  border: none;
  color: #ffffff;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    background: #fe6e00;
  }
`;
