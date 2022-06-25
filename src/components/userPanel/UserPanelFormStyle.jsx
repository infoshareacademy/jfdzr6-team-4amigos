import styled from "styled-components";

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
  font-family: Open Sans;
  h2 {
    color: #c5c7c5;
  }
`;

export const StyledForm = styled.form`
  margin: 0 auto;
  width: 800px;
  background-color: #ffc524;
  padding: 50px 125px;
  border-radius: 10px;
  margin-bottom: 50px;
  h5 {
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
    margin-bottom: 10px;
  }
  input[type="text"] {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    font-size: 16px;
    padding: 10px;
    ::placeholder {
      color: #c5c7c5;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }
  input[type="number"] {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
    border: none;
    font-size: 16px;
    padding: 10px;
    ::placeholder {
      color: #c5c7c5;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }
  textarea {
    resize: none;
    height: 150px;
    width: 400px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    padding: 10px;
    ::placeholder {
      color: #c5c7c5;
      padding-top: 5px;
    }
    :focus-visible {
      outline: 3px solid #ff8020;
    }
    transition: 0.2s;
    :hover {
      outline: 3px solid #ff8020;
    }
  }
`;

export const StyledSportsDivContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ffc524;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledSportsDiv = styled.div`
  background-color: #fff;
  height: 50px;
  width: 250px;
  border-radius: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #c5c7c5;
  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: 15px;
    accent-color: #ff8020;
  }
`;

export const StyledGenderDivContainer = styled.div`
  display: flex;
  width: 550px;
  border: 1px solid #ffc524;
  height: 50px;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  div {
    background-color: #fff;
    height: 50px;
    width: 250px;
    border-radius: 5px;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  input[type="radio"] {
    width: 20px;
    height: 20px;
    margin: 15px;
    accent-color: #ff8020;
  }
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #c5c7c5;
  }
`;

export const StyledSubmitButton = styled.button`
  background: #ff8020;
  margin-top: 40px;
  border-radius: 5px;
  width: 525px;
  height: 50px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  border: none;
  color: #ffffff;
  transition: 0.3s;
  cursor: pointer;
  :hover {
    background: #fe6e00;
  }
`;
